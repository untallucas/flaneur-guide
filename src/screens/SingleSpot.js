import React from 'react'

import Navigation from '../components/Navigation/Navigation'
// import HeroImage from '../../components/HeroImage/HeroImage'
// import PageHeading from '../../components/PageHeading/PageHeading'
// import TextBlock from '../../components/TextBlock/TextBlock'
import Separator from '../components/Separator/Separator'
// import MapCard from '../../components/MapCard/MapCard'

import DataItems from '../data/DataItems.js'

/*
const SingleSpot = props => {
  let Spot = DataItems.filter(function (spot) {
    return spot.slug === props.match.params.slug
  })

  return (
    <div>
      <Navigation/>
        { --- No coincidence between URL slug and saved spots --- }
        { Boolean(!Spot.length) && (
          <h1>Ups, me parece que no hay nada con ese nombre por acá</h1>
        )}

        { --- Positive coincidence between URL slug and saved spots --- }
        { Boolean(Spot.length) && (
          <div>
            {Spot.map((spot, i) => (
              <div key={i}>
                <HeroImage image={spot.poster} description={spot.title} />
                <PageHeading title={spot.title} text={spot.text} />
                <TextBlock title='Entradas' content={spot.info_tickets} />
                <TextBlock title='Horarios' content={spot.info_timetable} />
                <TextBlock title='Más información' content={spot.info_more} />
                <MapCard address={spot.address} hood={spot.hood} lat={spot.lat} lon={spot.lon} title={spot.title} />

                <p>Categorias: {spot.categories}</p>
                <p>Tags: {spot.tags}</p>
                <p>Authors: {spot.authors}</p>
                <p>Highlight: {spot.highlight}</p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

*/

const SingleSpot = props => {
  let Spot = DataItems.filter(function (spot) {
    return spot.slug === props.match.params.slug
  })

  return (
    <div>
      <Navigation/>
        { Boolean(!Spot.length) && (
          <h1>Ups, me parece que no hay nada con ese nombre por acá</h1>
        )}

        { Boolean(Spot.length) && (
          <div>
            {Spot.map((spot, i) => (
              <div key={i}>
                <img src={spot.poster} description={spot.title} alt={spot.title} />
                <p>{spot.title}</p>
                <p>{spot.text}</p>
                <p>{spot.info_tickets}</p>
                <p>{spot.info_timetable}</p>
                <p>{spot.info_more}</p>
                <p>{spot.address} / {spot.hood} / {spot.lat} / {spot.lon}</p>
                <Separator />
                <p>Categorias: {spot.categories}</p>
                <p>Tags: {spot.tags}</p>
                <p>Authors: {spot.authors}</p>
                <p>Highlight: {spot.highlight}</p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default SingleSpot
