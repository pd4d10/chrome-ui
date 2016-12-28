import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
import './Sidebar.css'

export default class Sidebar extends Component {
  state = {
    browsers: [
      'chrome',
      'firefox',
      'edge',
      'safari',
    ]
  }

  render() {
    return (
      <div className="Sidebar">
        <ul>
          {
            this.state.browsers.map(browser =>
              <li key={browser}>
                <i className={`fa fa-3x fa-${browser}`}></i>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
