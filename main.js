import { moveForward, moveBackward } from './lib/actionsCreators'
import { store } from './lib/store'


// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(moveForward())
store.dispatch(moveForward())
store.dispatch(moveBackward())