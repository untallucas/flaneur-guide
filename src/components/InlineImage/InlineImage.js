import React from 'react'

import './InlineImage.scss'

const InlineImage = props => {
  let fixture = 'https://picsum.photos/400/300'
  return (
    <div className="InlineImage">
      <img src={ fixture } alt={ props.description } />
    </div>
  )
}

export default InlineImage
