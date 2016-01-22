import { MOVE_FORWARD, MOVE_BACKWARD } from 'lib/actions'

/*
 * sub reducers
 */

function move(state = 0, action) {
  switch (action.type) {
    case MOVE_FORWARD:
      return state + 1
    case MOVE_BACKWARD:
      return state - 1
    default:
      return state
  }
}

/*
 * main reducer
 */

const initialState = { x: 0 }

export function app(state = initialState, action) {
  return  {
    x: move(state.x, action)
  }
}