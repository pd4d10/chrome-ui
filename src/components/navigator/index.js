import React, { PropTypes } from 'react'
import style from './navigator.css'
import Back from '../back'
import Forward from '../forward'
import Reload from '../reload'
import Star from '../star'
import Setting from '../setting'
import { changeInput, load } from '../../actions'

const handleSubmit = (url, dispatch) => (event) => {
  event.preventDefault()
  return dispatch(load(url))
}

const handleChange = dispatch => event => dispatch(changeInput(event.target.value))

/* eslint-disable */
const Navigator = ({ url, dispatch }) => (
  <div className={style.nav}>
    <a><Back /></a>
    <a><Forward /></a>
    <a><Reload /></a>
    <form onSubmit={handleSubmit(url, dispatch)}>
      <input type="text" onChange={handleChange(dispatch)} value={url} />
      <Star />
    </form>
    <a><Setting /></a>
  </div>
)

Navigator.propTypes = {
  url: PropTypes.string,
}

export default Navigator
