import React from 'react'
import { connect } from 'react-redux'
import { ADD_TAB, REMOVE_TAB, SELECT_TAB } from '../reducer'
import { addTab, removeTab, selectTab } from '../action'
import './browser.css'
import './tabs.css'
import './tab.css'
import Nav from './nav'

const Browser = ({ tabs, activeTab, addTab, selectTab }) => (
  <div className="browser">
    <ul className="tabs">
      {tabs.map(({ id, title }) => (
        <li key={id} onClick={selectTab(id)}>
          <div className="tab">
            <div className="tab-content">{title}</div>
          </div>
        </li>
      ))}
    </ul>
    <div onClick={addTab}>add tab</div>
    <Nav />
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
})
const mapDispatchToProps = dispatch => ({
  addTab: () => dispatch(addTab()),
  selectTab: id => () => dispatch(selectTab(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Browser)
