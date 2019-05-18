    
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers/'

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers(),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk
      ),
    ),
  )

  return store
}