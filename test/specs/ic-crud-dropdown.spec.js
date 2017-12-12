import Vue from 'vue';
import Component from '../../src/ic-crud-dropdown/ic-crud-dropdown';

describe('ic-crud-dropdown.vue', () => {
  const Constructor = Vue.extend(Component);
  const propsData = {text: 'Test text'};

  it('should instance the right component', () => {
    const vm = new Constructor({propsData});
    expect(vm.$options.name).to.equal('ic-crud-dropdown');
  });

  it('should render correct content', () => {
    const vm = new Constructor({propsData}).$mount();
    expect(vm.$el.innerHTML).to.equal(propsData.text);
  });
});
