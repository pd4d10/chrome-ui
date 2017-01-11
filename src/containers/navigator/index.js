import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './navigator.css'
import Back from '../../components/back'
import Forward from '../../components/forward'
import Reload from '../../components/reload'
import Star from '../../components/star'
import Setting from '../../components/setting'
import { changeInput, load } from '../../actions'

/* eslint-disable */
const Navigator = ({ url, dispatch }) => (
  <div className={style.nav}>
    <a onClick={console.log}>
      <Back />
    </a>
    <a onClick={console.log}>
      <Forward />
    </a>
    <a onClick={console.log}><Reload /></a>
    <form onSubmit={event => {
      event.preventDefault()
      return dispatch(load(url))
    }}>
      <input
        type="text"
        onChange={event => dispatch(changeInput(event.target.value))}
        value={url}
      />
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
  // url: state.tabs[state.activeTab].url,
  url: state.input,
  updateUrl: () => {},
})

export default connect(mapStateToProps)(Navigator)
