import React from 'react'
import Browser from './browser'
import './main.css'

export default function Main() {
  return (
    <div className="main">
      {
          [
            'chrome',
            // 'firefox',
            // 'edge',
            // 'safari',
          ].map(browser =>
            <Browser name={browser} key={browser} />,
          )
        }
    </div>
  )
}
