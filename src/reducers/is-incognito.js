import * as actions from '../actions'

export default function isIncognito(state = false, action) {
  switch (action.type) {
    case actions.TOGGLE_INCOGNITO:
      return action.value
    default:
      return state
  }
}
