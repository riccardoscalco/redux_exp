import { createStore, applyMiddleware, compose } from 'redux'
import { app } from 'lib/reducers'

//export let store = createStore(app)

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export let store = finalCreateStore(app)