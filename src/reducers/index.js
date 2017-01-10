import { combineReducers } from 'redux'
import tabs from './tabs'
import activeTab from './active-tab'

export default combineReducers({
  tabs,
  activeTab,
})
