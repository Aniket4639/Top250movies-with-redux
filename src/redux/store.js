import {createStore,applyMiddleware} from 'redux'

import {logger} from 'redux-logger'
import rootreducer from './rootreducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store
