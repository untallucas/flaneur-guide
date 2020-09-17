import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './OutstandingCard.scss'


const OutstandingCard = props => {
  let spot
  if(!props.spot){
    spot = {
      id: 0,
      slug: 'marco-museo-arco-de-cordoba',
      title: 'MARCO - Museo Arco de Córdoba',
      poster: 'http://gideon.afterseven.com.ar/public/images/marco-museo-arco-de-cordoba-01.jpg'
    }
  }
  else {
    spot = props.spot
  }

  let url = '/lugares/' + spot.slug
  let printname = spot.shorttitle ? spot.shorttitle : spot.title
  let image = spot.poster_url ? spot.poster_url[0].url : ''
  let posterColor = spot.poster_color ? spot.poster_color : '#CCCCCC'

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
