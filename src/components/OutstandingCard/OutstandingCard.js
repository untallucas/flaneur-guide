import React from 'react'
import { Link } from 'react-router-dom'

import HighlightBadge from '../HighlightBadge/HighlightBadge'

import './OutstandingCard.scss'

const OutstandingCard = function ({ spot }) {
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
  // let image = { spot.poster }
  let image = 'https://picsum.photos/400/300?random=' + Math.random()  
  let highlight 
  if(spot.highlight){
    highlight = <HighlightBadge/>
  } 

  return (
    <div className="OutstandingCard">
      <Link to={ url } className="OutstandingCard__Link">
        <img className="OutstandingCard__Image" src={ image } alt={ spot.printname } />
        <span className="OutstandingCard__Position">4</span>
        <p className="OutstandingCard__Subtitle">{ spot.hood }</p>
        <h3 className="OutstandingCard__Title">{ printname }</h3>
        { highlight }
      </Link>
    </div>
  )
}

export default OutstandingCard
