import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './OutstandingCard.scss'

const OutstandingCard = props => {
  let url = '/lugares/' + props.spot.slug
  let printname = props.spot.shorttitle ? props.spot.shorttitle : props.spot.title
  let image = props.spot.poster_url ? props.spot.poster_url[0].url : ''
  let posterColor = props.spot.poster_color ? props.spot.poster_color : '#CCCCCC'

  return (
    <Link to={ url } className="OutstandingCard">
      <LazyLoadImage
        src={ image }
        alt={ printname }
        height={ '100%' }
        width={ '100%' }
        effect='opacity'
        threshold= { 0 }
        className='OutstandingCard__Background__Image'
        wrapperClassName='OutstandingCard__Background'
        wrapperProps={{ style: { backgroundColor: posterColor } }}
      />
      <div className="OutstandingCard__Content">
        <span className="OutstandingCard__Content__Position">{ props.position + 1 }</span>
        <div className="OutstandingCard__Content__TitleWrapper">
          <h3 className="OutstandingCard__Content__Title">{ printname }</h3>
        </div>
      </div>
    </Link>
  )
}

export default OutstandingCard
