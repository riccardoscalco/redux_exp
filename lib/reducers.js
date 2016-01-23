import { MOVE_FORWARD, MOVE_BACKWARD } from 'lib/actions'
import undoable, { distinctState } from 'redux-undo'

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

const undoableMove = undoable(move, { filter: distinctState() })

/*
 * main reducer
 */

const initialState = { x: 0 }

export function app(state = initialState, action) {
  return  {
    //x: move(state.x, action)
    x: undoableMove(state.x, action)
  }
}