import React from 'react'

import './PageLayoutImage.scss'

const PageLayoutImage = props => {
  let fixture = 'https://picsum.photos/400/300'
  return (
    <div className="PageLayoutImage">
      <img className="PageLayoutImage__Image" src={ fixture } alt={ props.description } />
    </div>
  )
}

export default PageLayoutImage
