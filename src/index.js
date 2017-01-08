import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { v4 } from 'uuid'
import Container from './App'
import reducer from './reducer'
import './index.css'

const id = v4()

const presistedState = {
  activeTab: id,
  tabs: {
    [id]: {
      url: 'https://en.wikipedia.org/wiki/Main_Page',
      title: 'New Tab',
    },
  },
}

const store = createStore(reducer, presistedState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
)
