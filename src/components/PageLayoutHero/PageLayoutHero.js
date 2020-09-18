import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './PageLayoutHero.scss'

const PageLayoutHero = props => {
  let posterColor = props.poster_color ? props.poster_color : '#CCCCCC'

  return (
    <div className="PageLayoutHero">
      <LazyLoadImage
        src={ props.image }
        alt={ props.title }
        effect='opacity'
        threshold= { 0 }
        className='PageLayoutHero__Background__Image'
        wrapperClassName='PageLayoutHero__Background'
        wrapperProps={{ style: { backgroundColor: posterColor } }}
      />
      <div className="PageLayoutHero__Content">
        <h1 className="PageLayoutHero__Title">{ props.title }</h1>
        <p className="PageLayoutHero__Subtitle">{ props.subtitle }</p>
      </div>
    </div>
  )
}

export default PageLayoutHero
