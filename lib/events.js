import d3 from "d3"
import { store } from 'lib/store'
import { moveForward, moveBackward } from 'lib/actionsCreators'
import { ActionCreators } from 'redux-undo'

d3.select("#fbutton")
    .on("click", () => {
      store.dispatch(moveForward())
    })

d3.select("#bbutton")
    .on("click", () => {
      store.dispatch(moveBackward())
    })

d3.select(".circle")
    .on("click", () => {
      store.dispatch(moveBackward())
    })

d3.select("#undo")
    .on("click", () => {
      store.dispatch(ActionCreators.undo())
    })

d3.select("#redo")
    .on("click", () => {
      store.dispatch(ActionCreators.redo())
    })