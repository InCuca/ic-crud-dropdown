```jsx
new Vue({
  template: `
    <div :style="{display: 'flex', justifyContent: 'space-around'}">
      <ic-crud-dropdown
          :items="shows"
          :formlyEditFields="fields"
          :formlyAddFields="fields"
          txtSingleEntitityName="TV Show"
          txtPluralEntitityName="TV Shows"
          @create="onCreate"
          @update="onUpdate"
          @delete="onDelete"
          @select="onSelect"
          />
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
      }, {
        key: 'season',
        type: 'input',
        requried: true,
        templateOptions: {label: 'Season', atts: {type: 'number'}}
      }, {
        key: 'channel',
        type: 'select',
        options: ['CB ', 'USA'],
        templateOptions: {label: 'Channel'}
      },
    ],
    shows: [
      { id: 's0', name: 'The Big Bang Theory', season: 1, channel: 'CBS'},
      { id: 's1', name: 'Suits', season: 3, channel: 'USA'},
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
