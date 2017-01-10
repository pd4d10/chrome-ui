import React, { PropTypes } from 'react'
import style from './frame.css'

const Frame = ({ id, url, isActive }) => (
  <iframe
    className={`${style.frame} ${isActive ? '' : style.hidden}`}
    src={url}
    key={id}
    onLoad={console.log}
  />
)

Frame.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string,
  isActive: PropTypes.bool,
}

export default Frame
