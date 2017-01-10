import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import { addTab, selectTab, closeTab } from '../../actions'
import Tab from '../../components/tab'
import style from './tabs.css'

/* eslint-disable */
const Tabs = ({ tabs, dispatch }) => (
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
    <li onClick={() => dispatch(addTab())} className={style.add} />
  </ul>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}

export default Tabs
