import {
  ADD_TAB,
  CLOSE_TAB,
  UPDATE_URL,
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from '../actions'
import { getTitle } from '../util'

export default function tabs(state = {}, action) {
  switch (action.type) {
    case ADD_TAB:
      return {
        ...state,
        [action.id]: {
          title: 'New Tab',
          url: '',
          isLoading: false,
          isLoaded: false,
          isFailed: false,
        },
      }
    case CLOSE_TAB: {
      const s = { ...state }
      delete s[action.id]
      return s
    }
    case UPDATE_URL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          url: action.url,
        },
      }
    case LOAD_START:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isLoading: true,
          isLoaded: false,
          url: action.url,
          title: getTitle(action.url),
        },
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isLoading: false,
          isLoaded: true,
        },
      }
    case LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          isLoading: false,
          isFailed: true,
        },
      }
    default:
      return state
  }
}
