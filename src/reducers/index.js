import { combineReducers } from 'redux'
import tabs from './tabs'
import activeTab from './active-tab'
import input from './input'

export default combineReducers({
  tabs,
  activeTab,
  input,
})
