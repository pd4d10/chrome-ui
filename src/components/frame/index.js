import React, { PropTypes } from 'react'
import style from './frame.css'

const Frame = ({ tabs }) => (
  <div className={style.content}>
    {tabs.map(({ id, url, isActive }) => (
      <iframe
        className={`${style.frame} ${isActive ? '' : style.hidden}`}
        src={url}
        key={id}
        onLoad={console.log}
      />
    ))}
  </div>
)

Frame.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    url: PropTypes.string,
    isActive: PropTypes.bool,
  }),
}

export default Frame
