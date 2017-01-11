import { CHANGE_INPUT, SELECT_TAB, ADD_TAB, FOCUS_INPUT, CLOSE_TAB } from '../actions'

export default function input(state = '', action) {
  switch (action.type) {
    case CHANGE_INPUT:
    case FOCUS_INPUT:
      return action.value
    case SELECT_TAB:
      return action.url
    case CLOSE_TAB:
      return action.url
    case ADD_TAB:
      return ''
    default:
      return state
  }
}
