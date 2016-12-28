import React from 'react'

const Nav = ({
  onBack,
  onForward,
  onRefresh,
}) => (
  <div>
    <a href="#" onClick={onBack}>back</a>
    <a href="#" onClick={onForward}>forward</a>
    <a href="#" onClick={onRefresh}>refresh</a>
  </div>
)

export default Nav
