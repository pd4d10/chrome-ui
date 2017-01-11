import React, { Component } from 'react'
import { changeInput, focusInput, blurInput } from '../../actions'

/* eslint-disable */
export default class Input extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    return this.props.dispatch(changeInput(event.target.value))
  }

  handleFocus() {
    const { url, dispatch } = this.props
    dispatch(focusInput(url))
  }

  handleBlur() {
    return this.props.dispatch(blurInput())
  }

  render() {
    const { url, input, isInputFocus } = this.props
    return (
      <input
        id="location"
        type="text"
        placeholder="Type URL here and press Enter"
        value={isInputFocus ? input : url}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        ref={$dom => (this.$input = $dom)}
      />
    )
  }
}
