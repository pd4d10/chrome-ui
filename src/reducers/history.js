import {
  ENABLE_GO_BACK,
  DISABLE_GO_BACK,
  ENABLE_GO_FORWARD,
  DISABLE_GO_FORWARD,
} from '../actions/history'

export default function history(state = {
  canGoBack: false,
  canGoForward: false,
}, action) {
  switch (action.type) {
    case ENABLE_GO_BACK:
      return {
        ...state,
        canGoBack: true,
      }
    case DISABLE_GO_BACK:
      return {
        ...state,
        canGoBack: false,
      }
    case ENABLE_GO_FORWARD:
      return {
        ...state,
        canGoForward: true,
      }
    case DISABLE_GO_FORWARD:
      return {
        ...state,
        canGoForward: false,
      }
    default:
      return state
  }
}
