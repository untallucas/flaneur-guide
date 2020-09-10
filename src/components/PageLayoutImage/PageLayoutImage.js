import React from 'react'

import './PageLayoutImage.scss'

const PageLayoutImage = props => {
  return (
    <div className="PageLayoutImage">
      <img className="PageLayoutImage__Image" src={ props.image } alt={ props.description } />
    </div>
  )
}

export default PageLayoutImage
