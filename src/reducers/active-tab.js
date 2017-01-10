import { ADD_TAB, SELECT_TAB } from '../actions'

export default function activeTab(state = 0, action) {
  switch (action.type) {
    case ADD_TAB:
    case SELECT_TAB:
      return action.id
    default:
      return state
  }
}
