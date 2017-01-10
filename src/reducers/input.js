import { CHANGE_INPUT } from '../actions'

export default function input(state = '', action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.value
    default:
      return state
  }
}
