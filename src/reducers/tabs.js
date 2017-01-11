import {
  ADD_TAB,
  CLOSE_TAB,
  UPDATE_URL,
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from '../actions'
import { completeUrl, getTitle } from '../util'

export default function tabs(state = {}, action) {
  switch (action.type) {
    case ADD_TAB:
      return state.set(action.id, {
        title: 'New Tab',
        url: '',
        isLoading: false,
      })
    case CLOSE_TAB:
      return state.without(action.id)
    case UPDATE_URL:
      return state.setIn([action.id, 'url'], action.url)
    case LOAD_START:
      return state
        .setIn([action.id, 'isLoading'], true)
        .setIn([action.id, 'isLoaded'], false)
        .setIn([action.id, 'url'], completeUrl(action.url))
        .setIn([action.id, 'title'], getTitle(action.url))
    case LOAD_SUCCESS:
      return state
        .setIn([action.id, 'isLoading'], false)
        .setIn([action.id, 'isLoaded'], true)
    case LOAD_FAIL:
      return state
        .setIn([action.id, 'isLoading'], false)
        .setIn([action.id, 'isFailed'], true)
    default:
      return state
  }
}
