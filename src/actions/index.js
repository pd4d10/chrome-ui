import { v4 } from 'uuid'

export const ADD_TAB = 'ADD_TAB'
export const CLOSE_TAB = 'CLOSE_TAB'
export const SELECT_TAB = 'SELECT_TAB'
export const UPDATE_URL = 'UPDATE_TITLE'
export const CHANGE_INPUT = 'CHANGE_INPUT'

export const addTab = () => ({
  type: ADD_TAB,
  id: v4(),
})

export const closeTab = id => ({
  type: CLOSE_TAB,
  id,
})

export const selectTab = id => ({
  type: SELECT_TAB,
  id,
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
