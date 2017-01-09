import { combineReducers } from 'redux'
import { omit } from 'lodash'
import history from './history'

import { ADD_TAB, CLOSE_TAB, SELECT_TAB, UPDATE_URL } from '../actions'

const tabs = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        [action.id]: {
          title: 'New Tab',
        },
      }
    case CLOSE_TAB:
      return omit(state, action.id)
    case UPDATE_URL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          url: action.url,
        },
      }
    default:
      return state
  }
}

const activeTab = (state = 0, action) => {
  switch (action.type) {
    case ADD_TAB:
    case SELECT_TAB:
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  tabs,
  activeTab,
  history,
})
