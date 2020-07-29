import React, { Component } from 'react'

import './SpotImage.scss'

const SpotImage = props => {
  let fixture = 'https://picsum.photos/400/300'
  return (
    <div className="SpotImage">
      <img src={ fixture } alt={ props.description } />
    </div>
  )
}

export default SpotImage
