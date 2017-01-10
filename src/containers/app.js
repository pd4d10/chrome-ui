import React from 'react'
import { connect } from 'react-redux'
import './app.css'
import style from './browser.css'
import Tabs from './tabs'
import Navigator from './navigator'
import Frame from '../components/frame'

const App = props => (
  <div className={style.browser}>
    <Tabs {...props} />
    <Navigator />
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
})

// const mapDispatchToProps = dispatch => ({
//   addTab: () => dispatch(addTab()),
//   selectTab: id => () => dispatch(selectTab(id)),
//   closeTab: id => (event) => {
//     event.stopPropagation()
//     return dispatch(closeTab(id))
//   },
//   // updateUrl: event => dispatch(updateUrl(event.target.value)),
//   updateUrl: (event) => {
//     event.preventDefault()
//     console.log(event)
//   },
// })

export default connect(mapStateToProps)(App)
