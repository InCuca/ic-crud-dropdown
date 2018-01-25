```jsx
new Vue({
  template: `
  <div id="customModals" :style="{display: 'flex', justifyContent: 'space-around'}">
    <ic-crud-dropdown
        txtSingleEntitityName="TV Show"
        txtPluralEntitityName="TV Shows"
        disable-modals
        :selectedItem="selectedShow"
        :items="shows"
        @add-click="onAdd"
        @edit-click="onEdit"
        @trash-click="onTrash"
        @select="onSelect"/>

    <!-- ADD MODAL -->
    <b-modal ref="addModal" @ok="onCreate">
      <b-input v-model="inputText" />
    </b-modal>

    <!-- EDIT MODAL -->
    <b-modal ref="editModal">
      <b-input v-model="inputText" />
    </b-modal>

    <!-- DELETE MODAL -->
    <b-modal ref="deleteModal">
      Are you sure to delete?
    </b-modal>

    <code><pre>{{ JSON.stringify(shows, null, 4) }}</pre></code>
    <code><pre>{{ JSON.stringify(selectedShow, null, 4) }}</pre></code>
  </div>
  `,
  data: {
    fields: [
      {
        key: 'name',
        type: 'input',
        required: true,
        templateOptions: {label: 'Name'}
      }
    ],
    shows: [
      { id: 's0', name: 'The Big Bang Theory'},
      { id: 's1', name: 'Suits'},
    ],
    selectedShow: null,
    inputText: '',
  },
  methods: {
    onAdd() {
      this.inputText = '';
      this.$refs.addModal.show();
    },
    onCreate() {
      const id = 's' + Math.round(Math.random() * 1000)
      this.shows.push({id, name: this.inputText});
    },
    onEdit({item}) {
      this.inputText = item.name;
      this.$refs.editModal.$off('ok');
      this.$refs.editModal.$on('ok', () =>
        this.onUpdate(item)
      );
      this.$refs.editModal.show();
    },
    onUpdate(item) {
      const newItem = {
        id: item.id,
        name: this.inputText
      }
      const index = this.shows.indexOf(item);
      this.shows.splice(index, 1, newItem);
    },
    onTrash({item}) {
      this.$refs.deleteModal.$off('ok');
      this.$refs.deleteModal.$on('ok', () =>
        this.onDelete(item)
      );
      this.$refs.deleteModal.show();
    },
    onDelete(item) {
      const index = this.shows.indexOf(
        this.shows.find(s => s.id === item.id)
      );
      this.shows.splice(index, 1);
    },
    onSelect(event) {
      this.selectedShow = event.item;
    }
  }
});
```
