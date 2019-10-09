import IcFormly from '@bit/incuca.incuca-ui.ic-formly'
import Component from './ic-crud-dropdown/ic-crud-dropdown.vue'

const IcCrudDropdown = {
  install(Vue, options) {
    // Install IcFormly
    Vue.use(IcFormly)

    // add our components
    Vue.component('ic-crud-dropdown', Component)
  }
};

//auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(IcCrudDropdown);
}


export default IcCrudDropdown;
