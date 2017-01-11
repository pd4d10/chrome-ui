import { FOCUS_INPUT, ADD_TAB } from '../actions'

export default function isInputFocus(state = false, action) {
  switch (action.type) {
    case FOCUS_INPUT:
    case ADD_TAB:
      return true
    default:
      return state
  }
}
