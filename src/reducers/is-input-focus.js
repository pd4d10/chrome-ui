import { FOCUS_INPUT, BLUR_INPUT, ADD_TAB, SELECT_TAB, CLOSE_TAB } from '../actions'

export default function isInputFocus(state = false, action) {
  switch (action.type) {
    case FOCUS_INPUT:
    case ADD_TAB:
      return true
    case BLUR_INPUT:
    case SELECT_TAB:
    case CLOSE_TAB:
      return false
    default:
      return state
  }
}
