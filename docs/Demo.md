```jsx
new Vue({
  el: '#app',
  template: `
    <div>
      <ic-crud-dropdown
          :items="series"
          :formlyEditFields="fields"
          :formlyAddFields="fields"
          @create="events.push({name: 'create', payload: $event})"
          @read="events.push({name: 'read', payload: $event})"
          @update="events.push({name: 'update', payload: $event})"
          @delete="events.push({name: 'delete', payload: $event})"
          @search="events.push({name: 'search', payload: $event})"
          @select="events.push({name: 'select', payload: $event})"/>
      <ul>
        <li v-for="event in events">
          <b>{{event.name}}</b>
          <pre><code>{{JSON.stringify(event.payload)}}</code></pre>
        </li>
      </ul>
    </div>
  `,
  data: {
    events: [],
    fields: [
      {key: 'name', type: 'input'},
      {key: 'season', type: 'input'},
      {key: 'channel', type: 'select', options: ['CBS', 'USA']},
    ],
    series: [
      { id: 's0', name: 'The Big Bang Theory', season: 1, channel: 'CBS'},
      { id: 's1', name: 'Suits', season: 3, channel: 'USA'},
    ]
  }
});
```
