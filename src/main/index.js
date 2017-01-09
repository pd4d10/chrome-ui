/* eslint-disable */
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
      <img src={require('../bg1.png')} style={{
        display: 'none',
        position: 'fixed',
        width: '1440px',
        height: '900px',
        top: 0,
        opacity: '0.4',
        top: '-166px',
    left: '-52px',
    zIndex: '99999'
      }} />
    </div>
  )
}
