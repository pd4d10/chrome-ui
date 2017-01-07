import { v4 } from 'uuid'
import { ADD_TAB, REMOVE_TAB, SELECT_TAB } from '../reducer'

export const addTab = data => ({
  type: ADD_TAB,
  id: v4(),
  data,
})

export const removeTab = id => ({
  type: REMOVE_TAB,
  id,
})

export const selectTab = id => ({
  type: SELECT_TAB,
  id,
})
