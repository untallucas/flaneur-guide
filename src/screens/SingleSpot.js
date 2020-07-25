import React from 'react'

import Navigation from '../components/Navigation/Navigation'
// import HeroImage from '../../components/HeroImage/HeroImage'
// import PageHeading from '../../components/PageHeading/PageHeading'
import TextBlock from '../components/TextBlock/TextBlock'
import Separator from '../components/Separator/Separator'
// import MapCard from '../../components/MapCard/MapCard'

import DataItems from '../data/DataItems.js'

/*
  <HeroImage image={spot.poster} description={spot.title} />
  <PageHeading title={spot.title} text={spot.text} />
  <MapCard address={spot.address} hood={spot.hood} lat={spot.lat} lon={spot.lon} title={spot.title} />
*/

const SingleSpot = props => {
  let Spot = DataItems.filter(function (spot) {
    return spot.slug === props.match.params.slug
  })

  return (
    <div>
      <Navigation/>
      <div className="Layout Layout--Col-1">
        { /* No coincidence between URL slug and saved spots */ }
        { Boolean(!Spot.length) && (
          <h1>Ups, me parece que no hay nada con ese nombre por acá</h1>
        )}

        { /* Positive coincidence between URL slug and saved spots */ }
        { Boolean(Spot.length) && (
          <div>
            {Spot.map((spot, i) => (
              <div key={ i }>
                <img src='https://picsum.photos/400/300' description={ spot.title } alt={ spot.title } />
                <h1>{ spot.title }</h1>
                <p>{ spot.text }</p>
                <TextBlock title='Entradas' content={ spot.info_tickets } />
                <TextBlock title='Horarios' content={ spot.info_timetable } />
                <TextBlock title='Más información' content={ spot.info_more } />
                <p>{ spot.address } / { spot.hood } / { spot.lat } / { spot.lon }</p>
                <Separator />
                <p>Categorias: { spot.categories }</p>
                <p>Tags: { spot.tags }</p>
                <p>Authors: { spot.authors }</p>
                <p>Highlight: { spot.highlight }</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleSpot
