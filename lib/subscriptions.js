import { update } from 'lib/update'
import { store } from 'lib/store'

let unsubscribe = store.subscribe(() => update())
