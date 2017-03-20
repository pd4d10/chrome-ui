import { combineReducers } from 'redux'
import tabs from './tabs'
import activeTab from './active-tab'
import input from './input'
import isInputFocus from './is-input-focus'
import isIncognito from './is-incognito'

export default combineReducers({
  tabs,
  activeTab,
  input,
  isInputFocus,
  isIncognito,
})
