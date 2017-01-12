import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import { addTab, selectTab, closeTab } from '../../actions'
import Tab from '../tab'
import style from './tabs.css'
import { getGithubWidget, sendEvent } from '../../util'

/* eslint-disable */
const Tabs = ({ tabs, dispatch }) => (
  <div className={style.container}>
    <ul className={style.tabs}>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          {...pick(tab, ['id', 'url', 'title', 'isActive'])}
          select={() => dispatch(selectTab(tab.id))}
          close={(event) => {
            event.stopPropagation()
            return dispatch(closeTab(tab.id))
          }}
        />
      ))}
      <div onClick={() => dispatch(addTab())} className={style.add} />
    </ul>
    <div
      className={style.widget}
      dangerouslySetInnerHTML={{__html:getGithubWidget()}}
      onMouseEnter={() => sendEvent('star', 'click')}
    />
  </div>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}

export default Tabs
