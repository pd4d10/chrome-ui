import { v4 } from 'uuid'

export const ADD_TAB = 'ADD_TAB'
export const CLOSE_TAB = 'CLOSE_TAB'
export const SELECT_TAB = 'SELECT_TAB'
export const UPDATE_URL = 'UPDATE_TITLE'
export const CHANGE_INPUT = 'CHANGE_INPUT'

export const LOAD_START = 'LOAD_START'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'

export const addTab = () => ({
  type: ADD_TAB,
  id: v4(),
})

export const closeTab = id => (dispatch, getState) => {
  const state = getState()
  const allIds = Object.keys(state.tabs)

  // do not close last tab
  if (allIds.length <= 1) {
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

const loadStart = ({ id, url }) => ({
  type: LOAD_START,
  id,
  url,
})

export const loadSuccess = id => ({
  type: LOAD_SUCCESS,
  id,
})

const loadFail = id => ({
  type: LOAD_FAIL,
  id,
})

export const load = url => (dispatch, getState) => {
  const id = getState().activeTab
  dispatch(loadStart({ id, url }))

  // HACK
  // We don't know if iframe loaded successfully.
  // If no response after 3s, marked as fail.
  const TIMEOUT = 3000
  setTimeout(() => {
    if (!getState().tabs[id].isLoaded) {
      dispatch(loadFail(id))
    }
  }, TIMEOUT)
}
