import React from 'react'

import Icon from '../Icon/Icon'

import './PageLayoutImage.scss'

const PageLayoutImage = props => {
  return (
    <div className="PageLayoutImage">
      { Boolean(props.author) && (
        <div className="PageLayoutImage__Info">
          <Icon className="PageLayoutImage__Icon" name="information" width="24" height="24" />
          <a className="PageLayoutImage__Text" href={ props.link } target="_blank" rel="noopener noreferrer">{ 'Foto: ' + props.author }</a>
        </div>
      )}
      <img className="PageLayoutImage__Image" src={ props.image } alt={ props.description } />
    </div>
  )
}

export default PageLayoutImage
