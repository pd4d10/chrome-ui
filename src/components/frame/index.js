import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { completeUrl } from '../../util'
import { loadSuccess } from '../../actions'
import './frame.css'

const handleLoad = ({ dispatch, id }) => () => dispatch(loadSuccess(id))

// Remove iframe's sandbox allow-top-navigation to prevent top location change
const Frame = ({ isIncognito, tabs, dispatch }) => (
  <div className="frame">
    {tabs.map(({ id, url, isActive }) => (
      <iframe
        className={classNames({ 'frame-hidden': !isActive })}
        src={url ? completeUrl(url) : null}
        key={id}
        onLoad={handleLoad({ dispatch, id })}
        sandbox="allow-same-origin allow-forms allow-scripts"
        style={
          isIncognito
            ? {
                background: '#323232',
              }
            : {}
        }
      />
    ))}
  </div>
)

Frame.propTypes = {
  isIncognito: PropTypes.bool.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string,
      isActive: PropTypes.bool,
      isFailed: PropTypes.bool,
    })
  ),
  dispatch: PropTypes.func,
}

export default Frame
