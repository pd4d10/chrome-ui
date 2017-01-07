import { combineReducers } from 'redux'
import { omit } from 'lodash'

export const ADD_TAB = 'ADD_TAB'
export const REMOVE_TAB = 'REMOVE_TAB'
export const SELECT_TAB = 'SELECT_TAB'
export const UPDATE_URL = 'UPDATE_TITLE'

const tabs = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        [action.id]: {
          title: 'New Tab'
        }
      }
    case REMOVE_TAB:
      return omit(state, action.id)
    case UPDATE_URL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          url: action.url,
        }
      }
    default:
      return state
  }
}

const activeTab = (state = 0, action) => {
  switch (action.type) {
    case ADD_TAB:
    case SELECT_TAB:
    console.log(action)
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  tabs,
  activeTab,
})
