import React from 'react'
import { Link } from 'react-router-dom'

import HighlightBadge from '../HighlightBadge/HighlightBadge'

import './ItemsGridSpot.scss'

const ItemsGridSpot = function ({ spot }) {
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
  let image = 'https://picsum.photos/400/300?random=' + spot.id
  let highlight 
  if(spot.highlight){
    highlight = <HighlightBadge/>
  } 

  return (
    <div className="ItemsGridSpot">
      <Link to={ url } className="ItemsGridSpot__Link">
        <img className="ItemsGridSpot__Image" src={ image } alt={ spot.printname } />
        <h3 className="ItemsGridSpot__Title">{ printname }</h3>
        <p className="ItemsGridSpot__Subtitle">{ spot.hood }</p>
        { highlight }
      </Link>
    </div>
  )
}

export default ItemsGridSpot
