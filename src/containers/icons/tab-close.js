import React, { PureComponent } from 'react'

export default class TabClose extends PureComponent {
  constructor() {
    super()
    this.state = {
      hovered: false,
    }
  }

  render() {
    return (
      <svg
        viewBox="0 0 32 32" width="16" height="16" style={{
          zIndex: 100,
          alignSelf: 'center',
          marginLeft: '2px',
        }}
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        {...this.props}
      >
        {this.state.hovered && (
          <path fill="#f00" d="M 16 16 m -14 0 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" />
        )}
        <path
          fill="gray" stroke="gray" strokeWidth="2"
          d="M 10.25 10.25 l 11.5 11.5 M 10.25 21.75 l 11.5 -11.5"
        />
      </svg>
    )
  }
}
