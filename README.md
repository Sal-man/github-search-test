# Tradeling coding test
The main Structure of the application is that we have a main strore and `thunk` and `persist` logic resides in the same store index file i've break down actions, reducers and store to folders and for each feature we can add its seperate actions, reducers and stores. For the main state structure i've defined the type of action, it could be either `users` and `repositories` by default it'll be users, a `searchText` key which will hold the current searched text and `repos` array, naming could be better but at the moment that i've come up with.

For simiplicity i've added `thunk` logic inside the reducer but for larger project that will be in seperate file for better management. Again approach can be better for the structure with more time and R&D.

- `actionForm` component has the form of that will trigger on change event and debounce is also implemented in there.
- That component will trigger event to its parent component `App` which then dispatches functions according to the event.
- After API call the state will show the approapirate component which are `components/showRepo` in case of repositories and `components/showUsers` for fetching users.
