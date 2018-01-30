import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import { addTab, selectTab, closeTab } from '../../actions'
import Tab from '../tab'
import { Incognito } from '../icons'
import './tabs.css'

const Tabs = ({ tabs, dispatch }) => (
  <div className="tabs-container">
    <div className="tabs">
      <ul>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            {...pick(tab, ['id', 'url', 'title', 'isActive'])}
            select={() => dispatch(selectTab(tab.id))}
            close={event => {
              event.stopPropagation()
              return dispatch(closeTab(tab.id))
            }}
          />
        ))}
        <li onClick={() => dispatch(addTab())} className="tabs-add" />
      </ul>
      <Incognito className="tabs-incognito" />
    </div>
  </div>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}

export default Tabs
