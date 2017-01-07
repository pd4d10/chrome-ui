import { combineReducers } from 'redux'

export const ADD_TAB = 'ADD_TAB'
export const REMOVE_TAB = 'REMOVE_TAB'
export const SELECT_TAB = 'SELECT_TAB'

const tabs = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        [action.id]: action.data
      }
    case REMOVE_TAB:
      return {
        ...state,
        [action.id]: undefined,
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
