import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { v4 } from 'uuid'
import App from './containers/app'
import reducers from './reducers'

const id = v4()

const presistedState = {
  activeTab: id,
  tabs: {
    [id]: {
      url: 'https://en.wikipedia.org/wiki/Main_Page',
      title: 'Wikipedia - Wikipedia',
    },
  },
}

const middwares = [thunk]
if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
  // middwares.push(window.__REDUX_DEVTOOLS_EXTENSION__()) // eslint-disable-line
}

const store = createStore(reducers, presistedState, applyMiddleware(...middwares))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
