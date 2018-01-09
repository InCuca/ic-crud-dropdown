```jsx
new Vue({
  template: `
    <div :style="{display: 'flex', justifyContent: 'space-around'}">
      <ic-crud-dropdown
          enable-search
          :selectedItem="selectedShow"
          :items="foundShows"
          :formlyEditFields="fields"
          :formlyAddFields="fields"
          txtSingleEntitityName="TV Show"
          txtPluralEntitityName="TV Shows"
          @search="onSearch"
          @select="selectedShow = $event.item"
          />
       <code><pre>{{ JSON.stringify(shows, null, 4) }}</pre></code>
    </div>
  `,
  data: {
    selectedShow: null,
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
        options: ['CBS', 'AMC ', 'USA', 'Netflix', 'Showtime', 'HBO', 'History'],
        templateOptions: {label: 'Channel'}
      },
    ],
    shows: [
      { id: 's0', name: 'The Big Bang Theory', season: 1, channel: 'CBS'},
      { id: 's1', name: 'The Walking Dead', season: 3, channel: 'AMC'},
      { id: 's2', name: 'The Crown', season: 3, channel: 'Netflix'},
      { id: 's3', name: 'Vikings', season: 4, channel: 'History'},
      { id: 's4', name: 'Stranger Things', season: 2, channel: 'Netflix'},
      { id: 's5', name: 'Shamless', season: 2, channel: 'Showtime'},
      { id: 's6', name: 'Game of Thrones', season: 7, channel: 'HBO'},
      { id: 's7', name: 'Dark', season: 1, channel: 'Netflix'},
    ],
    foundShows: [],
  },
  methods: {
   onSearch(term) {
     this.foundShows = this.shows.filter(s => {
       const reg = new RegExp(term, 'i');
       return (
        s.name.match(reg) ||
        s.channel.match(reg)
       );
     });
   }
  }
});
```
