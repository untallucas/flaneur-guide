import React from 'react'

import './PageLayoutImage.scss'

const PageLayoutImage = props => {
  let fixture = 'https://picsum.photos/400/300'
  return (
    <div className="PageLayoutImage">
      <img src={ fixture } alt={ props.description } />
    </div>
  )
}

export default PageLayoutImage
