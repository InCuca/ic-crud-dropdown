import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import IcFormly from 'ic-formly/cjs/ic-formly.min.js'
import Dropdown from '@/ic-crud-dropdown/ic-crud-dropdown.vue'
import { showModal, clickOk } from '../helpers/modals'
import { submitForm } from '../helpers/formly'
import { click } from '../helpers/native'
import { companies, companyFields } from '../mocks/company'

Vue.use(BootstrapVue)
Vue.use(IcFormly)

describe('ic-crud-dropdown.vue', () => {
  const propsData = {
    formlyEditFields: companyFields,
    formlyAddFields: companyFields,
    items: companies,
  }

  let Constructor, vm;

  beforeEach(done => {
    Constructor = Vue.extend(Dropdown);
    vm = new Constructor({
      propsData,
      mounted: () => done(),
    }).$mount();
  })

  afterEach(() => vm.$destroy())

  describe('search', () => {
    it.skip('should emit `search` with the searched term', done => {
      // TODO: ERROR log of InfiniteLoading, the test is passing but with warnings
      const typedTerm = 'test search';

      vm.$on('search', term => {
        expect(term).to.equal(typedTerm);
        done();
      });

      vm.onSearchInput(typedTerm);
    })

    it.skip('should emit `load-more` with the searched term', done => {
      // TODO: ERROR log of InfiniteLoading, the test is passing but with warnings
      const typedTerm = 'test search';
      const loadedCallback = function () { };

      vm.$on('load-more', ({ search, loaded }) => {
        expect(search).to.equal(typedTerm);
        expect(loaded).to.equal(loadedCallback);
        // console.log(window.getComputedStyle(vm.$refs.inf.$el).overflowY)
        done();
      });

      vm.searchText = typedTerm;
      vm.onInfiniteScroll({ loaded: loadedCallback });
    })

    it.skip('should emit `search` with null when dropdown opens', () => {
      // TODO: implement test
    })
  });

  describe('dropdown item', () => {
    it('should emit `select` with the correct item', done => {
      const payload = { ".key": "k1" };
      vm.$on('select', ({ item, key }) => {
        expect(item).to.equal(payload);
        expect(item[".key"]).to.equal(payload[".key"]);
        done();
      });
      vm.onDropdownItemClick(payload);
    })
  })

  describe('add modal', () => {
    it('should open add modal `onDropdownAddClick`', done => {
      vm.$refs.addModal.$on('show', () => done())
      vm.onDropdownAddClick();
    })

    it('should close the edit modal `onAddFormSubmission` when validated', () => {
      return Promise
        .resolve()
        .then(showModal(vm.$refs.addModal))
        .then(submitForm(vm.$refs.addForm))
        .then(() => {
          expect(vm.$refs.addModal.is_visible).to.equal(false);
        });
    })

    it('should close the dropdown `onAddFormSubmission` when validated', () => {
      vm.$refs.dropdown.show();
      return Promise
        .resolve()
        .then(showModal(vm.$refs.addModal))
        .then(submitForm(vm.$refs.addForm))
        .then(() => {
          expect(vm.$refs.dropdown.visible).to.equal(false);
        });
    })

    it('should emit `create` `onAddFormSubmission`', () => {
      const whenCreateEvent = new Promise(resolve => {
        vm.$on('create', item => {
          expect(item).to.deep.equal(vm.$refs.addForm.createModel());
          resolve();
        })
      });

      return Promise
        .resolve()
        .then(showModal(vm.$refs.addModal))
        .then(submitForm(vm.$refs.addForm))
        .then(() => whenCreateEvent);
    })
  })

  describe('edit modal', () => {
    it('should open edit modal `onDropdownEditClick`', done => {
      vm.$refs.editModal.$on('show', () => done())
      vm.onDropdownEditClick();
    })

    it('should close the edit modal `onEditFormSubmission` when validated', () => {
      return Promise
        .resolve()
        .then(showModal(vm.$refs.editModal))
        .then(submitForm(vm.$refs.editForm))
        .then(() => {
          expect(vm.$refs.editModal.is_visible).to.equal(false);
        });
    })

    it('should close the dropdown `onEditFormSubmission` when validated', () => {
      vm.$refs.dropdown.show();
      return Promise
        .resolve()
        .then(showModal(vm.$refs.editModal))
        .then(submitForm(vm.$refs.editForm))
        .then(() => {
          expect(vm.$refs.dropdown.visible).to.equal(false);
        });
    })

    it('should emit `update` `onEditFormSubmission`', () => {
      vm.selectedItem = companies[0];

      const whenUpdateEvent = new Promise(resolve => {
        vm.$on('update', ({ item, id }) => {
          expect(item).to.deep.equal(companies[0]);
          expect(id).to.equal(companies[0]['id']);
          resolve();
        })
      });

      return Promise
        .resolve()
        .then(showModal(vm.$refs.editModal))
        .then(submitForm(vm.$refs.editForm))
        .then(() => whenUpdateEvent);
    })
  })

  describe('delete modal', () => {
    it.skip('should open delete modal `onTrashClick`', () => {
      // TODO: Implement delete modal test
    })

    it.skip('should change `itemTrashName` to item name `onTrashClick`', () => {
      // TODO: Implement delete modal test
    })

    it('should emit `delete` on `deleteModal` confirmation', () => {
      const whenDeleteEvent = new Promise(resolve => {
        vm.$on('delete', ({ item, id }) => {
          expect(item).to.deep.equal(companies[0]);
          expect(id).to.equal(companies[0]['id']);
          resolve();
        })
      });

      return Promise
        .resolve()
        .then(click(vm.$el.querySelector('.iccd-select-trash_button')))
        .then(clickOk(vm.$refs.deleteModal))
        .then(() => whenDeleteEvent);
    })
  })
})
