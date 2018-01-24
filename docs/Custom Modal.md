```jsx
new Vue({
  template: `
    <div :style="{display: 'flex', justifyContent: 'space-around'}">
      <ic-crud-dropdown
          :selectedItem="selectedShow"
          :items="shows"
          txtSingleEntitityName="TV Show"
          txtPluralEntitityName="TV Shows"
          @create="onCreate"
          @update="onUpdate"
          @delete="onDelete"
          @select="onSelect">
          <div slot="editModal">
            Customized Edit Modal
          </div>
          <div slot="addModal">
            Customized Add Modal
          </div>
          <div slot="deleteModal">
            Customized Delete Modal
          </div>
      </ic-crud-dropdown>
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
  },
  methods: {
    onCreate(event) {
      this.shows.push(event);
    },
    onUpdate(event) {
      const index = this.shows.indexOf(
        this.shows.find(s => s.id === event.id)
      );
      this.shows.splice(index, 1, event.item);
    },
    onDelete(event) {
      const index = this.shows.indexOf(
        this.shows.find(s => s.id === event.id)
      );
      this.shows.splice(index, 1);
    },
    onSelect(event) {
      this.selectedShow = event.item;
    }
  }
});
```
