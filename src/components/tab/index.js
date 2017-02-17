/* eslint-disable */
import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { getFavicon } from '../../util'
import TabClose from '../tab-close'
import style from './tab.css'

const Tab = ({
  id,
  url,
  title,
  isActive,
  select,
  close,
}) => (
  <li
    key={id}
    onClick={select}
    className={classNames(style.tab, {
      [style.active]: isActive,
    })}
  >
    {url === '' ? <div className={style.placeholder} /> : (
      <img
        src={getFavicon(url)}
        className={style.favicon}
        alt="favicon"
      />
    )}
    <div className={style.content}>{title}</div>
    <TabClose onClick={close} />
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
