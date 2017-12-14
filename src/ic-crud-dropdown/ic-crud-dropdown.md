This component renders a dropdown with search and CRUD
Example:

```jsx
const fields = [
 {key: 'name', type: 'input'},
 {key: 'season', type: 'input'},
 {key: 'channel', type: 'select', options: ['CBS', 'USA']},
]

let series = [
 { id: 's0', name: 'The Big Bang Theory', season: 1, channel: 'CBS'},
 { id: 's1', name: 'Suits', season: 3, channel: 'USA'},
]

<ic-crud-dropdown
     :items="series"
     :formlyEditFields="fields"
     :formlyAddFields="fields" />
```

Dependencies (add them manually):
- [FontAwesome](http://fontawesome.io/)
