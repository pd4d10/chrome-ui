import React, { Component } from 'react'
import Browser from './browser'
import './Main.css'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Main">
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
