import React, { PropTypes } from 'react'
import classNames from 'classnames'
import style from './navigator.css'
import Back from '../back'
import Forward from '../forward'
import Reload from '../reload'
import Star from '../star'
import Setting from '../setting'
import Input from './input'
import { load } from '../../actions'

const handleSubmit = dispatch => (event) => {
  event.preventDefault()
  return dispatch(load())
}

const Navigator = ({ url, isInputFocus, input, dispatch }) => (
  <div className={style.nav}>
    <a><Back /></a>
    <a><Forward /></a>
    <a><Reload /></a>
    <form
      onSubmit={handleSubmit(dispatch)}
      className={classNames({
        [style.active]: isInputFocus,
      })}
    >
      <Input {...{ url, isInputFocus, input, dispatch }} />
      <Star />
    </form>
    <a><Setting /></a>
  </div>
)

Navigator.propTypes = {
  url: PropTypes.string.isRequired,
  isInputFocus: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Navigator
