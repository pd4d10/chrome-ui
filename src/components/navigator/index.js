import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Back from '../back'
import Forward from '../forward'
import Reload from '../reload'
import Star from '../star'
import Setting from '../setting'
import Input from './input'
import { load } from '../../actions'
import './navigator.css'

const handleSubmit = dispatch => event => {
  event.preventDefault()
  return dispatch(load())
}

const Navigator = ({ url, isInputFocus, input, dispatch }) => (
  <div className="nav">
    <a>
      <Back />
    </a>
    <a>
      <Forward />
    </a>
    <a>
      <Reload />
    </a>
    <form
      onSubmit={handleSubmit(dispatch)}
      className={classNames({
        active: isInputFocus,
      })}
    >
      <Input {...{ url, isInputFocus, input, dispatch }} />
      <Star />
    </form>
    <a>
      <Setting />
    </a>
  </div>
)

Navigator.propTypes = {
  url: PropTypes.string.isRequired,
  isInputFocus: PropTypes.bool.isRequired,
  input: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Navigator
