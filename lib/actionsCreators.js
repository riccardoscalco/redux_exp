import { MOVE_FORWARD, MOVE_BACKWARD } from 'lib/actions'

export function moveForward() {
  return { type: MOVE_FORWARD }
}

export function moveBackward() {
  return { type: MOVE_BACKWARD }
}