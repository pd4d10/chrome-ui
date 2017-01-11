import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { completeUrl } from '../../util'
import { loadSuccess } from '../../actions'
import style from './frame.css'

const handleLoad = ({ dispatch, id }) => () => dispatch(loadSuccess(id))

const Frame = ({ tabs, dispatch }) => (
  <div className={style.content}>
    {tabs.map(({ id, url, isActive }) => (
      <iframe
        className={classNames({ [style.hidden]: !isActive })}
        src={url ? completeUrl(url) : null}
        key={id}
        onLoad={handleLoad({ dispatch, id })}
      />
    ))}
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
