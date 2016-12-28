import React from 'react'
import './browser.css'
import Tabs from './tabs'
import Nav from './nav'
import Frame from './frame'

const Browser = ({ name }) => (
  <div className="browser">
    <Tabs tabs={[1,2,3]} />
    <Nav />
    <Frame src="https://en.wikipedia.org/wiki/Main_Page" />
  </div>
)

export default Browser
