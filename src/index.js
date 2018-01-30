import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { v4 } from 'uuid'
import App from './containers/app'
import reducers from './reducers'

const ids = [v4(), v4(), v4()]

const presistedState = {
  activeTab: ids[2],
  tabs: {
    [ids[0]]: {
      url: 'https://www.bing.com',
      title: 'Bing',
      isLoading: true,
      isLoaded: false,
      isFailed: false,
    },
    [ids[1]]: {
      url: 'https://en.wikipedia.org',
      title: 'Wikipedia',
      isLoading: true,
      isLoaded: false,
      isFailed: false,
    },
    [ids[2]]: {
      url: '',
      title: 'New Tab',
      isLoading: true,
      isLoaded: false,
      isFailed: false,
    },
  },
  input: '',
  isIncognito: false,
}

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  presistedState,
  composeEnhancers(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
