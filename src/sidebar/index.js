import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        {
          [
            'chrome',
            'firefox',
            'edge',
            'safari',
          ].map(browser =>
            <li key={browser}>
              <i className={`fa fa-3x fa-${browser}`} />
            </li>,
          )
        }
      </ul>
    </div>
  )
}
