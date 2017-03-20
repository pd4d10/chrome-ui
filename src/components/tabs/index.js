import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import { addTab, selectTab, closeTab } from '../../actions'
import Tab from '../tab'
import style from './tabs.css'
import Incognito from '../incognito'

/* eslint-disable */
const Tabs = ({ tabs, dispatch }) => (
  <div className={style.container}>
    <div className={style.tabs}>
      <ul>
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
        <li onClick={() => dispatch(addTab())} className={style.add} />
      </ul>
      <Incognito className={style.incognito} />
    </div>
  </div>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}

export default Tabs
