import React, { PropTypes } from 'react'
import { pick } from 'lodash'
import { addTab, selectTab, closeTab } from '../../actions'
import Tab from '../tab'
import style from './tabs.css'

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
    </ul>
    <div onClick={() => dispatch(addTab())} className={style.add} />
    <iframe
      src="https://ghbtns.com/github-btn.html?user=pd4d10&repo=chrome-ui&type=star"
      frameBorder="0"
      scrolling="0"
      width="53px"
      height="20px"
    />
  </div>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}

export default Tabs
