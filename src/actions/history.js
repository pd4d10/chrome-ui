export const ENABLE_GO_BACK = 'ENABLE_GO_BACK'
export const DISABLE_GO_BACK = 'DISABLE_GO_BACK'
export const ENABLE_GO_FORWARD = 'ENABLE_GO_FORWARD'
export const DISABLE_GO_FORWARD = 'DISABLE_GO_FORWARD'

export const enableGoBack = () => ({
  type: ENABLE_GO_BACK,
})

export const disableGoBack = () => ({
  type: DISABLE_GO_BACK,
})

export const enableGoForward = () => ({
  type: ENABLE_GO_FORWARD,
})

export const disableGoForward = () => ({
  type: DISABLE_GO_FORWARD,
})
