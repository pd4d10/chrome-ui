/* eslint-disable */
import React from 'react'
import { connect } from 'react-redux'
import { addTab, removeTab, selectTab, updateUrl } from '../action'
import Back from './icons/back'
import Forward from './icons/forward'
import Reload from './icons/reload'
import Home from './icons/home'
import style from './browser.css'

// Icons from https://material.io/icons/
const Browser = ({ tabs, activeTab, addTab, selectTab, removeTab, url }) => (
  <div className={style.browser}>
    <ul className={style.tabs}>
      {tabs.map(({ id, title }) => (
        <li key={id} onClick={selectTab(id)} className={style.tab}>
          <div className={style.tabContent}>{title}</div>
          <svg
            onClick={removeTab(id)}
            className={style.close} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </li>
      ))}
      <li onClick={addTab} className={style.add} />
    </ul>
    <div className={style.nav}>
      <ul>
        <li onClick={() => history.back()}>
          <Back />
        </li>
        <li onClick={() => history.forward()}>
          <Forward />
        </li>
        <li><Reload /></li>
        <li><Home /></li>
      </ul>
      <form onSubmit={updateUrl}>
        <input type="text" onChange={updateUrl} value={url} />
      </form>
    </div>
    <div>
      {tabs.map(({ id, url }) => (
        <iframe
          className={`${style.frame} ${id === activeTab ? '' : style.hidden}`}
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
  })),
  activeTab: state.activeTab,
  url: state.tabs[state.activeTab].url,
})
const mapDispatchToProps = dispatch => ({
  addTab: () => dispatch(addTab()),
  selectTab: id => () => dispatch(selectTab(id)),
  removeTab: id => (event) => {
    event.stopPropagation()
    return dispatch(removeTab(id))
  },
  updateUrl: event => dispatch(updateUrl(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
