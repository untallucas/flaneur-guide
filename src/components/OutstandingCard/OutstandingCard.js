import React from 'react'
import { Link } from 'react-router-dom'

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
  // let image = { spot.poster }
  let image = 'https://picsum.photos/400/300?random=' + Math.random()

  return (
    <Link to={ url } className="OutstandingCard">
      <div className="OutstandingCard__Background">
        <img className="OutstandingCard__Background__Image" src={ image } alt={ printname } />
      </div>
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
