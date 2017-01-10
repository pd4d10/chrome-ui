/* eslint-disable */
import React from 'react'
import classNames from 'classnames'
import getFavicon from '../../util'
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
    <img
      onLoad={e => console.log(e, 'img')}
      // src={getFavicon(url)}
      className={style.favicon}
      alt="favicon"
    />
    <div className={style.content}>{title}</div>
    <TabClose onClick={close} />
  </li>
)

export default Tab
