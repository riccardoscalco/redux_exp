import { createStore } from 'redux'
import { app } from 'lib/reducers'

export let store = createStore(app)