import React from 'react'

const Frame = ({ src }) => (
  <iframe
    src={src}
    style={{
      width: '100%',
      height: '100%',
    }}
  />
)

export default Frame
