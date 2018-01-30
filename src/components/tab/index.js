import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { getFavicon } from '../../util'
import { TabClose } from '../icons'
import './tab.css'

const Tab = ({ id, url, title, isActive, select, close }) => (
  <li
    key={id}
    onClick={select}
    className={classNames('tab', {
      active: isActive,
    })}
  >
    {url === '' ? (
      <div className="tab-placeholder" />
    ) : (
      <img src={getFavicon(url)} className="tab-favicon" alt="favicon" />
    )}
    <div className="tab-content">{title}</div>
    <TabClose onClick={close} className="tab-close" />
  </li>
)

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
}

export default Tab
