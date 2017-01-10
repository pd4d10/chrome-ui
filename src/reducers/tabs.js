import { omit } from 'lodash'
import { ADD_TAB, CLOSE_TAB, UPDATE_URL } from '../actions'

export default function tabs(state = {}, action) {
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
