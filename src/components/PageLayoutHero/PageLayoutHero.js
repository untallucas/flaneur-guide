import React from 'react'

import './PageLayoutHero.scss'

const PageLayoutHero = props => {
  return (
    <div className="PageLayoutHero">
      <img className="PageLayoutHero__Background" src={ props.image } alt={ props.title } />
      <div className="PageLayoutHero__Content">
        <h1 className="PageLayoutHero__Title">{ props.title }</h1>
        <p className="PageLayoutHero__Subtitle">{ props.subtitle }</p>
      </div>
    </div>
  )
}

export default PageLayoutHero
