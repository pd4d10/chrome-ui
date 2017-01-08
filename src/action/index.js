import { v4 } from 'uuid'
import { ADD_TAB, REMOVE_TAB, SELECT_TAB, UPDATE_URL } from '../reducer'

export const addTab = () => ({
  type: ADD_TAB,
  id: v4(),
})

export const removeTab = id => ({
  type: REMOVE_TAB,
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
