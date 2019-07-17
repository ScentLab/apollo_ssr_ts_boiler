import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux'

import rootReducer from '../modules'

export default (initialState = {}) => process.env.NODE_ENV === 'production' ?
  createStore(rootReducer, initialState) :
  createStore(rootReducer, initialState, devToolsEnhancer({ serialize: true, trace: true }))
