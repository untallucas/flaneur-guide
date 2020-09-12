import React from 'react'
import { Link } from 'react-router-dom'

import HighlightBadge from '../HighlightBadge/HighlightBadge'

import './SpotCard.scss'

const SpotCard = function ({ spot }) {
  if(!spot){
    spot = {
      id: 0,
      slug: 'marco-museo-arco-de-cordoba',
      title: 'MARCO - Museo Arco de Córdoba',
      hood: 'Empalme',
      poster: 'http://gideon.afterseven.com.ar/public/images/marco-museo-arco-de-cordoba-01.jpg',
      categories: [10, 9],
      tags: [5, 8, 9],
      author: [4, 6],
      highlight: false
    }
  }

  let url = '/lugares/' + spot.slug
  let printname = spot.shorttitle ? spot.shorttitle : spot.title
  let image = spot.poster_url ? spot.poster_url[0].url : ''
  let highlight 
  if(spot.highlight){
    highlight = <HighlightBadge/>
  } 

  return (
    <div className="SpotCard">
      <Link to={ url } className="SpotCard__Link">
        <img className="SpotCard__Image" src={ image } alt={ spot.printname } />
        <h3 className="SpotCard__Title">{ printname }</h3>
        <p className="SpotCard__Subtitle">{ spot.hood }</p>
        { highlight }
      </Link>
    </div>
  )
}

export default SpotCard
