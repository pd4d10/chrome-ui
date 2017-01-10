/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { pick } from 'lodash'
import { addTab, closeTab, selectTab, updateUrl } from '../actions'
import classNames from 'classnames'
import Back from '../components/back'
import Forward from '../components/forward'
import Reload from '../components/reload'
import Home from './icons/home'
import Setting from './icons/setting'
import Favicon from './icons/favicon'
import Star from './icons/star'
import './app.css'
import style from './browser.css'
import { getFavicon } from '../util'
import Tab from '../components/tab'
import Frame from '../components/frame'

const App = ({ tabs, addTab, selectTab, closeTab, url, updateUrl }) => (
  <div className={style.browser}>
    <ul className={style.tabs}>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          {...pick(tab, ['id', 'url', 'title', 'isActive'])}
          select={selectTab(tab.id)}
          close={closeTab(tab.id)}
        />
      ))}
      <li onClick={addTab} className={style.add} />
    </ul>
    <div className={style.nav}>
      <a>
        <Back />
      </a>
      <a>
        <Forward />
      </a>
      <a><Reload /></a>
      <form onSubmit={updateUrl}>
        <input type="text" onChange={updateUrl} value={url} />
        <Star />
      </form>
      <a><Setting /></a>
    </div>
    <div className={style.content}>
      {tabs.map(tab => (
        <Frame {...pick(tab, ['id','url','isActive'])} />
      ))}
    </div>
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

const mapDispatchToProps = dispatch => ({
  addTab: () => dispatch(addTab()),
  selectTab: id => () => dispatch(selectTab(id)),
  closeTab: id => (event) => {
    event.stopPropagation()
    return dispatch(closeTab(id))
  },
  // updateUrl: event => dispatch(updateUrl(event.target.value)),
  updateUrl: (event) => {
    event.preventDefault()
    console.log(event)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
