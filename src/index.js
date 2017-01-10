import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Immutable from 'seamless-immutable'
import { v4 } from 'uuid'
import App from './containers/app'
import reducers from './reducers'

const id = v4()

const presistedState = Immutable({
  activeTab: id,
  tabs: {
    [id]: {
      url: 'https://en.wikipedia.org/wiki/Main_Page',
      title: 'Wikipedia - Wikipedia',
    },
  },
})

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line
const store = createStore(reducers, presistedState, composeEnhancers(
  applyMiddleware(...middlewares),
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
