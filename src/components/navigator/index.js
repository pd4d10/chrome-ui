import React, { PropTypes } from 'react'
import style from './navigator.css'
import Back from '../back'
import Forward from '../forward'
import Reload from '../reload'
import Star from '../star'
import Setting from '../setting'
import { changeInput, focusInput, load } from '../../actions'

const handleSubmit = dispatch => (event) => {
  event.preventDefault()
  return dispatch(load())
}

const handleChange = dispatch => event => dispatch(changeInput(event.target.value))

const handleFocus = ({ dispatch, value }) => () => dispatch(focusInput(value))

const Navigator = ({ url, isInputFocus, input, dispatch }) => (
  <div className={style.nav}>
    <a><Back /></a>
    <a><Forward /></a>
    <a><Reload /></a>
    <form onSubmit={handleSubmit(dispatch)}>
      <input
        type="text"
        value={isInputFocus ? input : url}
        onChange={handleChange(dispatch)}
        onFocus={handleFocus({ dispatch, url })}
      />
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
