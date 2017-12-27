<template lang="html">
  <div class="iccd-container">
    <b-dropdown
      class="iccd-select"
      variant="link"
      ref="dropdown"
      :right="right"
      @shown="onDropdownShown">
      <template slot="button-content">
        <i :class="iconClass"></i>
        <span class="iccd-select-entity">{{ txtDropdown }}</span>
      </template>
      <b-dropdown-header class="iccd-select-search" v-if="enableSearch">
        <b-form-input
          type="text"
          :placeholder="txtSearchField"
          v-model="searchText"
          @input="onSearchInput"/>
        <i class="fa fa-search"></i>

      </b-dropdown-header>
      <div
        ref="selectItems"
        class="iccd-select-items"
        infinite-wrapper
        :style="{'max-height': listHeight + 'px'}">
        <b-dropdown-item
          v-for="item in items"
          :ref="'dropdownItem' + getItemId(item)"
          :key="getItemId(item)"
          @focus="focusedItem = item"
          @click="onDropdownItemClick(item)">
          <span class="iccd-select-item_title">
            {{ getItemTitle(item) }}
          </span>
          <span
            :style="{visibility: focusedItem === item?'visible':'hidden'}"
            class="iccd-select-edit_button"
            :title="txtEditItem">
            <i
              class="fa fa-pencil"
              @click.stop="onDropdownEditClick(item)"></i>
          </span>
          <span
            class="iccd-select-trash_button"
            :style="{visibility: focusedItem === item?'visible':'hidden'}"
            :title="txtTrashItem"
            @click="onTrashClick(item)">
            <i class="fa fa-trash"></i>
          </span>
        </b-dropdown-item>
        <infinite-loading v-if="enablePagination" @infinite="onInfiniteScroll" />
      </div>
      <b-dropdown-divider></b-dropdown-divider>
      <b-button variant="link" @click="onDropdownAddClick">
        <i class="fa fa-plus"></i>
        {{ txtAddItem }}
      </b-button>
    </b-dropdown>

    <!-- ADD MODAL -->
    <b-modal
      ref="addModal"
      :title="txtSingleEntitityName"
      size="lg">
      <!-- @slot For custom add modal, when using it, all formly options are ignored -->
      <slot name="addModal">
        <!-- @slot Content before the form the form in modals -->
        <slot name="pre-form"></slot>
        <ic-formly
          ref="addForm"
          :fields="formlyAddFields"
          @input="onAddFormSubmission"/>
        <!-- @slot Content after the form in modals -->
        <slot name="post-form"></slot>
      </slot>
      <template slot="modal-footer">
        <b-button
          variant="success"
          @click="$refs.addForm.submit()">
          <i class="fa fa-check"></i>
          {{ txtSaveButton }}
        </b-button>
      </template>
    </b-modal>

    <!-- EDIT MODAL -->
    <b-modal
      ref="editModal"
      :title="txtSingleEntitityName"
      size="lg">
      <!-- @slot For custom edit modal, when using it, all formly options are ignored -->
      <slot name="editModal">
        <slot name="pre-form"></slot>
        <ic-formly
          ref="editForm"
          :value="selectedItem || {}"
          :fields="formlyEditFields"
          @input="onEditFormSubmission"/>
        <slot name="post-form"></slot>
      </slot>
      <template slot="modal-footer">
        <b-button
          variant="success"
          @click="$refs.editForm.submit()">
          <i class="fa fa-check"></i>
          {{ txtSaveButton }}
        </b-button>
      </template>
    </b-modal>

    <!-- DELETE MODAL -->
    <b-modal
      ref="deleteModal"
      :title="txtTrashItem">
      <slot name="deleteModal">Are you sure to delete <span class="trashItemName">this item</span>?</slot>
    </b-modal>
  </div>
</template>

<script>
import texts from './text-props.js'
import debounce from 'debounce'
import InfiniteLoading from 'vue-infinite-loading'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import IcFormly from 'ic-formly'
import BootstrapVue from 'bootstrap-vue'

Vue.use(IcFormly)
Vue.use(BootstrapVue)

export default {
  name: 'ic-crud-dropdown',
  components: {
    InfiniteLoading,
  },
  mixins: [texts],
  props: {
    /**
     * Defines the icon of the dropdown,
     * uses font-awesome (need to add it as dependency)
     */
    icon: {
      type: String,
      default: 'bars'
    },
    /**
     * Array of current items of the Entitity
     */
    items: {
      type: Array,
      default: null
    },
    /**
     * Function called for every item to get its unique ID
     * by default get the `.key` property of the item
     */
    getItemId: {
      type: Function,
      default: item => item['id']
    },
    /**
     * Function called for every item to get its title
     * by default get the `name` property of the item
     */
    getItemTitle: {
      type: Function,
      default: item => item['name']
    },
    /**
     * The mapping of the entitity fields to inputs in the editing form
     * More details in {@link https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/properties_and_options.html#fields|Vue Formly Docs}
     */
    formlyEditFields: {
      type: Array,
      required: true
    },
    /**
     * The mapping of the entitity fields to inputs in the adding form
     * More details in {@link https://matt-sanders.gitbooks.io/vue-formly/content/v/2.0/how_to_use/properties_and_options.html#fields|Vue Formly Docs}
     */
    formlyAddFields: {
      type: Array,
      required: true
    },
    /**
     * The list maximum height
     */
    listHeight: {
      type: Number,
      default: 200
    },
    /**
     * If enabled, the dropdown be align to right border of the button
     */
    right: {
      type: Boolean,
      default: false
    },
    /**
     * If enabled the dropdown will show a search field
     * use search and loaded events to handle the search
     */
    enableSearch: {
      type: Boolean,
      default: false
    },
    /**
     * If enabled the dropdown will trigger load-more event
     * when scroll reaches at end
     */
    enablePagination: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      /**
       * Current selected item
       */
      selectedItem: null,
      /**
       * Current focused item
       */
      focusedItem: null,
      /**
       * If dropdown is currently open or not
       */
      isOpen: false,
      /**
       * The currently searched text
       */
      searchText: '',
      /**
       * PerfectScrollbar Instance
       */
      ps: null
    }
  },
  computed: {
    iconClass() {
      return 'fa fa-' + this.icon
    },
    txtDropdown() {
      if (this.selectedItem) return this.getItemTitle(this.selectedItem);
      return this.txtPluralEntitityName;
    }
  },
  watch: {
    /**
     * TODO: Scroll into wrapper last of the added items, whenever it changes
     */
    // items: debounce(function(newItems) {
    //   const lastItem = newItems[newItems.length - 1];
    //   if (!lastItem) return;
    //   const refs = this.$refs['dropdownItem' + this.getItemId(lastItem)]
    //   if (!refs) return;
    //   const el = refs[0];
    //   if (!el) return;
    //   el.scrollIntoView();
    // }, 200),
  },
  mounted() {
    this.ps = new PerfectScrollbar(this.$refs.selectItems);
  },
  methods: {
    onDropdownItemClick(item) {
      this.selectedItem = item;
      /**
       * Select event with the selected item
       * @event select
       * @type {{item: object, id: object}}
       */
      this.$emit('select', {item, id: this.getItemId(item)});
    },
    onDropdownAddClick() {
      this.$refs.addModal.show();
    },
    onDropdownEditClick(item) {
      this.selectedItem = item;
      this.$refs.editModal.show();
    },
    onEditFormSubmission(item) {
      this.$refs.dropdown.hide();
      this.$refs.editModal.hide();
      /**
       * Update event with the updated item
       * @event update
       * @type {{item: object, id: object}}
       */
      this.$emit('update', {item, id: this.getItemId(item)});
    },
    onAddFormSubmission(item) {
      this.$refs.dropdown.hide();
      this.$refs.addModal.hide();
      /**
       * Create event with the created item (without id)
       * @event create
       * @type {object}
       */
      this.$emit('create', item);
    },
    onSearchInput: debounce(function(typedTerm) {
      /**
       * Search event with the searched entry
       * the searched term null when the user opens the dropdown
       * @event search
       * @type {string}
       */
      this.$emit('search', typedTerm);
    }, 200),
    onDropdownShown() {
      this.$emit('search', null);
    },
    onInfiniteScroll: debounce(function($state) {
      $state.search = this.searchText;

      // Wrap loaded function
      const oldLoaded = $state.loaded;
      $state.loaded = () => {
        this.$nextTick(() => this.ps.update());
        oldLoaded();
      };

      /**
       * Load more event with the searched entry, call loaded to
       * inform the component that elements are already loaded
       * @event load-more
       * @type {{search: string, loaded: function}}
       */
      this.$emit('load-more', $state, 200);
    }),
    onTrashClick(item) {
      this.$refs.deleteModal.$on('ok', () => {
      /**
       * Delete event with the deleted item and id
       * @event delete
       * @type {{item: Object, id: Object}}
       */
        this.$emit('delete', {item, id: this.getItemId(item)});
        this.$refs.deleteModal.$off('ok');
      });

      this.$refs.deleteModal.$el
        .querySelector('.trashItemName')
        .innerHTML = this.getItemTitle(item);

      this.$refs.deleteModal.show();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/mixins";

.iccd-container {
  display: inline-block;
}

.iccd-select {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: $secondary;

  .iccd-select-entity {
    margin-left: 10px;
    margin-right: 10px;
  }

  .iccd-select-search {
    position: relative;

    input {
    padding-right: 2em;
    }

    .fa {
      &:before {
        display: block;
        padding: $input-btn-padding-y $input-btn-padding-x;
      }

      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: $dropdown-item-padding-x;
      bottom: 0;
      left: auto;
      pointer-events: none;
      font-size: 1.143em;
    }
  }

  .iccd-select-items {
    position: relative;
    overflow-y: auto;

    .iccd-select-item_title {
      flex: 1;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .iccd-select-edit_button,
  .iccd-select-trash_button {
    margin-left: .6em;
    font-size: 1.143em;
    color: $primary;

    &:hover {
      transform: scale(1.14);
      transition: transform .1s ease-in-out;
      opacity: .8;
    }

    .fa {
      line-height: inherit;
    }
  }
}

/* Override Child Component CSS */
.iccd-select {
  &.show /deep/ .dropdown-toggle:after {
    transform: rotateX(180deg);
  }

  /deep/ .dropdown-toggle:after {
    transition: transform .2s ease-in-out;
  }

  /deep/ .btn-link:hover {
    text-decoration: none;
    opacity: .8;
  }

  /deep/ .btn-link {
    cursor: pointer;
    width: 100%;
    color: inherit;
  }
}

.iccd-select /deep/ .dropdown-menu {
  color: inherit;

  .btn-link {
    color: $primary;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - #{$dropdown-item-padding-x} * 2);
    margin: $dropdown-item-padding-y $dropdown-item-padding-x;
    line-height: 2;
    color: inherit;

    &:hover,
    &:focus {
      background: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    }

    &:focus {
      outline: solid 2px $primary;
    }
  }
}
</style>
