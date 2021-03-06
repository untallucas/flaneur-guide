import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import HighlightBadge from '../HighlightBadge/HighlightBadge'

import './SpotCard.scss'

const SpotCard = function ({ spot }) {
  let url = '/lugares/' + spot.slug
  let printname = spot.shorttitle ? spot.shorttitle : spot.title
  let image = spot.poster_url ? spot.poster_url[0].url : ''
  let posterColor = spot.poster_color ? spot.poster_color : '#CCCCCC'
  let highlight
  if(spot.highlight){
    highlight = <HighlightBadge/>
  }

  return (
    <div className="SpotCard">
      <Link to={ url } className="SpotCard__Link">
        <LazyLoadImage
          src={ image }
          alt={ spot.printname }
          height={ '100%' }
          width={ '100%' }
          effect='opacity'
          threshold= { 0 }
          className='SpotCard__Image'
          wrapperClassName='SpotCard__ImageWrapper'
          wrapperProps={{ style: { backgroundColor: posterColor } }}
        />
        <h3 className="SpotCard__Title">{ printname }</h3>
        <p className="SpotCard__Subtitle">{ spot.hood }</p>
        { highlight }
      </Link>
    </div>
  )
}

export default SpotCard
