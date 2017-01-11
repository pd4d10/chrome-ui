import React from 'react'
import { connect } from 'react-redux'
import { pick } from 'lodash'
import style from './app.css'
import Tabs from '../components/tabs'
import Navigator from '../components/navigator'
import Frame from '../components/frame'

const App = props => (
  <div className={style.app}>
    <Tabs {...props} />
    <Navigator {...pick(props, ['dispatch', 'url', 'isInputFocus', 'input'])} />
    <Frame {...props} />
  </div>
)

const mapStateToProps = state => ({
  tabs: Object.keys(state.tabs).map(id => ({
    id,
    ...state.tabs[id],
    isActive: state.activeTab === id,
  })),
  url: state.tabs[state.activeTab].url,
  isInputFocus: state.isInputFocus,
  input: state.input,
})

export default connect(mapStateToProps)(App)
