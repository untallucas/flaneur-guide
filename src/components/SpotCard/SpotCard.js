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
      subtitle: 'Empalme',
      poster: 'http://gideon.afterseven.com.ar/public/images/marco-museo-arco-de-cordoba-01.jpg',
      categories: [10, 9],
      tags: [5, 8, 9],
      author: [4, 6]
    }
  }

  let url = '/lugares/' + spot.slug
  let printname = spot.shorttitle ? spot.shorttitle : spot.title
  // let image = { spot.poster }
  let image = 'http://lorempixel.com/400/300/city/' + spot.id
  let highlight 
  if(spot.highlight){
    highlight = <HighlightBadge/>
  } 

  return (
    // <div className='SpotCard' categories={ spot.categories }>
    <div className="SpotCard">
      <Link to={ url }>
        <img src={ image } alt={ spot.printname } />
        <h3>{ printname }</h3>
        <p>{ spot.subtitle }</p>
        { highlight }
      </Link>
    </div>
  )
}

export default SpotCard
