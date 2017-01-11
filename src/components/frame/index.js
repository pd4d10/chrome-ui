import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { loadSuccess } from '../../actions'
import style from './frame.css'

const Frame = ({ tabs, dispatch }) => (
  <div className={style.content}>
    {tabs.map(({ id, url, isActive, isFailed }) => (isFailed ? (
      <div
        key={id}
        className={classNames(style.fail, {
          [style.hidden]: !isActive,
        })}
      >fail</div>
    ) : (
      <iframe
        className={classNames({ [style.hidden]: !isActive })}
        src={url}
        key={id}
        onLoad={() => dispatch(loadSuccess(id))}
      />
    )))}
  </div>
)

Frame.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string,
    isActive: PropTypes.bool,
    isFailed: PropTypes.bool,
  })),
  dispatch: PropTypes.func,
}

export default Frame
