import React from 'react'
import { Link } from 'react-router-dom'

import './SpotCard.scss'

const SpotCard = props => {
  let url = '/lugares/' + props.spot.slug
  let printname = props.spot.shorttitle ? props.spot.shorttitle : props.spot.title
  // let image = { props.spot.poster }
  let image = 'http://lorempixel.com/400/300/city/' + props.spot.id

  return (
    <div className="SpotCard">
      <Link to={ url }>
        <img src={ image } alt={ props.spot.printname } />
        <h2>{ printname }</h2>
        <p>{ props.spot.subtitle }</p>
      </Link>
    </div>
  )
}

export default SpotCard



/*

const SpotCard = function ({ spot }) {
  if (!spot) {
    spot = {
      id: 0,
      type: 'spot',
      slug: 'marco-museo-arco-de-cordoba',
      title: 'MARCO - Museo Arco de Córdoba',
      shorttitle: '',
      subtitle: 'Empalme',
      address: 'Av. Amadeo Sabattini 4750, Plaza de la República',
      poster: 'http://gideon.afterseven.com.ar/public/images/marco-museo-arco-de-cordoba-01.jpg',
      text: 'El Arco de Córdoba es una obra ubicada en el acceso sureste de la ciudad. Su origen se remonta al año 1942. MARCO fue pensado para exponer una línea histórica de Córdoba, la que se observa ilustrada en las paredes de ambas torres.',
      info_tickets: 'Entrada libre y gratuita',
      info_timetable: 'Martes a sábados de 9 a 17h',
      info_more: '',
      lat: '-31.438111',
      lon: '-64.128494',
      categories: [10, 9],
      tags: [5, 8, 9],
      author: [4, 6]
    }
  }

  let url = '/spot/' + spot.slug
  let printname = spot.shorttitle ? spot.shorttitle : spot.title

  return (
    <div className='spotcard' categories={spot.categories}>
      <Link to={url}>
        <img src={spot.poster} alt='Chupala React' />
        <h5 to={url}>{printname}</h5>
        <h6 to={url}>{spot.subtitle}</h6>
      </Link>
    </div>
  )
}

export default SpotCard
*/