import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { addTab, removeTab, selectTab, updateUrl } from '../action'
import './browser.css'
import './tabs.css'
import './tab.css'
import "./nav.css"

const Browser = ({ tabs, activeTab, addTab, selectTab, removeTab, url }) => (
  <div className="browser">
    <ul className="tabs">
      {tabs.map(({ id, title }) => (
        <li key={id} onClick={selectTab(id)}>
          <div className="tab">
            <div className="tab-content">{title}</div>
            <svg
              onClick={removeTab(id)}
              className="close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </div>
        </li>
      ))}
      <li onClick={addTab} className="add"></li>
    </ul>
    <div className="nav">
      <ul>
        <li onClick={() => history.back()}>
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </li>
        <li onClick={() => history.forward()}>
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </li>
        <li>
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </li>
      </ul>
      <form onSubmit={updateUrl}>
        <input type="text" onChange={updateUrl} value={url} />
      </form>
    </div>
    <div>
      {tabs.map(({ id, url }) => (
        <iframe
          className={`frame ${id === activeTab ? '' : 'hidden'}`}
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
    ...state.tabs[id]
  })),
  activeTab: state.activeTab,
  url: state.tabs[state.activeTab].url
})
const mapDispatchToProps = dispatch => ({
  addTab: () => dispatch(addTab()),
  selectTab: id => () => dispatch(selectTab(id)),
  removeTab: id => event => {
    event.stopPropagation()
    return dispatch(removeTab(id))
  },
  updateUrl: event => dispatch(updateUrl(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
