import * as actions from '../actions'

export default function input(state = '', action) {
  switch (action.type) {
    case actions.CHANGE_INPUT:
    case actions.FOCUS_INPUT:
      return action.value
    case actions.SELECT_TAB:
    case actions.LOAD_START:
    case actions.CLOSE_TAB:
      return action.url
    case actions.ADD_TAB:
      return ''
    default:
      return state
  }
}
