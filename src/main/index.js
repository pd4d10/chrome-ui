import React, { Component } from 'react'
import Browser from './browser'
import './main.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="main">
        {
          [
            'chrome',
            // 'firefox',
            // 'edge',
            // 'safari',
          ].map(browser =>
            <Browser name={browser} key={browser} />
          )
        }
      </div>
    )
  }
}
