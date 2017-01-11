import { ADD_TAB, SELECT_TAB, CLOSE_TAB } from '../actions'

export default function activeTab(state = 0, action) {
  switch (action.type) {
    case ADD_TAB:
    case SELECT_TAB:
      return action.id
    case CLOSE_TAB:
      return action.activeId
    default:
      return state
  }
}
