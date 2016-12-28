import React from 'react'
import Tab from './tab'
import './tabs.css'

const Tabs = ({ tabs }) => {
  return (
    <ul className="tabs">
      {
        tabs.map(tab => <li key={tab}><Tab tab={tab} /></li>)
      }
    </ul>
  )
}

export default Tabs
