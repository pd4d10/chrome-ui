/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { addTab, removeTab, selectTab, updateUrl } from '../action'
import classNames from 'classnames'
import Back from './icons/back'
import Forward from './icons/forward'
import Reload from './icons/reload'
import Home from './icons/home'
import Setting from './icons/setting'
import TabClose from './icons/tab-close'
import Favicon from './icons/favicon'
import Star from './icons/star'
import './app.css'
import style from './browser.css'
import { getFavicon } from '../util'

const App = ({ tabs, addTab, selectTab, removeTab, url, updateUrl }) => (
  <div className={style.browser}>
    <ul className={style.tabs}>
      {tabs.map(({ id, title, isActive }) => (
        <li
          key={id}
          onClick={selectTab(id)}
          className={classNames(style.tab, {
            [style.active]: isActive,
          })}
        >
          <img onLoad={e => console.log(e, 'img')} className={style.favicon} src={getFavicon(url)} />
          <div className={style.tabContent}>{title}</div>
          <TabClose />
        </li>
      ))}
      <li onClick={addTab} className={style.add} />
    </ul>
    <div className={style.nav}>
      <a onClick={() => history.back()}>
        <Back />
      </a>
      <a onClick={() => history.forward()}>
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
      {tabs.map(({ id, url, isActive }) => (
        <iframe
          className={`${style.frame} ${isActive ? '' : style.hidden}`}
          src={url}
          key={id}
          onLoad={console.log}
        />
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
  removeTab: id => (event) => {
    event.stopPropagation()
    return dispatch(removeTab(id))
  },
  // updateUrl: event => dispatch(updateUrl(event.target.value)),
  updateUrl: event => {
    event.preventDefault()
    console.log(event)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
