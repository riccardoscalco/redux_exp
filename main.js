import { moveForward, moveBackward } from './lib/actionsCreators'
import { store } from './lib/store'
import { init } from './lib/init'
import { update } from './lib/update'

// Draw SVG
init()

// Render circle
update(store)

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  //console.log(store.getState())
  update(store)
)

// Dispatch some actions
// store.dispatch(moveForward())
// store.dispatch(moveForward())
// store.dispatch(moveBackward())

document.addEventListener('click', () => {
  store.dispatch(moveForward())
})