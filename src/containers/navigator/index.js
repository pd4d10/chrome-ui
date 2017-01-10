import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './navigator.css'
import Back from '../../components/back'
import Forward from '../../components/forward'
import Reload from '../../components/reload'
import Star from '../../components/star'
import Setting from '../../components/setting'

/* eslint-disable */
const Navigator = ({ url, updateUrl }) => (
  <div className={style.nav}>
    <a onClick={console.log}>
      <Back />
    </a>
    <a onClick={console.log}>
      <Forward />
    </a>
    <a onClick={console.log}><Reload /></a>
    <form onSubmit={updateUrl}>
      <input type="text" onChange={updateUrl} value={url} />
      <Star />
    </form>
    <a><Setting /></a>
  </div>
)

Navigator.propTypes = {
  url: PropTypes.string,
  updateUrl: PropTypes.func,
}

const mapStateToProps = state => ({
  url: state.tabs[state.activeTab].url,
  updateUrl: () => {},
})

export default connect(mapStateToProps)(Navigator)
