import { v4 } from 'uuid'

export const ADD_TAB = 'ADD_TAB'
export const CLOSE_TAB = 'CLOSE_TAB'
export const SELECT_TAB = 'SELECT_TAB'
export const UPDATE_URL = 'UPDATE_TITLE'
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const FOCUS_INPUT = 'FOCUS_INPUT'
export const BLUR_INPUT = 'BLUR_INPUT'

export const LOAD_START = 'LOAD_START'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'

export const addTab = () => {
  // This is an ugly hack.
  // When new tab is opened, location input should focus.
  // It is too complex to do this in React way. 🌧
  document.querySelector('#location').focus()
  return {
    type: ADD_TAB,
    id: v4(),
  }
}

export const closeTab = id => (dispatch, getState) => {
  const state = getState()
  const { tabs } = state
  const allIds = Object.keys(tabs)

  // Do not close last tab
  if (allIds.length <= 1) {
    alert('This is the last tab :)') // eslint-disable-line
    return
  }

  // When active tab is closed, make right tab active
  // If no right, make left active
  let activeId = state.activeTab
  if (id === state.activeTab) {
    const position = allIds.indexOf(id)
    if (position < allIds.length - 1) {
      activeId = allIds[position + 1]
    } else {
      activeId = allIds[position - 1]
    }
  }

  dispatch({
    type: CLOSE_TAB,
    id,
    activeId,
    url: tabs[activeId].url,
  })
}

export const selectTab = id => (dispatch, getState) => dispatch({
  type: SELECT_TAB,
  id,
  url: getState().tabs[id].url,
})

export const updateUrl = ({ id, url }) => ({
  type: UPDATE_URL,
  id,
  url,
})

export const changeInput = value => ({
  type: CHANGE_INPUT,
  value,
})

export const focusInput = value => ({
  type: FOCUS_INPUT,
  value,
})

export const blurInput = () => ({
  type: BLUR_INPUT,
})

const loadStart = ({ id, url }) => ({
  type: LOAD_START,
  id,
  url,
})

export const loadSuccess = id => ({
  type: LOAD_SUCCESS,
  id,
})

export const load = () => (dispatch, getState) => {
  // Ugly hack either
  // Make loaction input blur after submit
  document.querySelector('#location').blur()

  const state = getState()
  const id = state.activeTab
  const url = state.input
  dispatch(loadStart({ id, url }))
}
