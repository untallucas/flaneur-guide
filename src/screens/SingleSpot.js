import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutImage from '../components/PageLayoutImage/PageLayoutImage'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import PageLayoutTextBlock from '../components/PageLayoutTextBlock/PageLayoutTextBlock'
import PageLayoutLinksBlock from '../components/PageLayoutLinksBlock/PageLayoutLinksBlock'
import PageLayoutMap from '../components/PageLayoutMap/PageLayoutMap'
import TaxonomiesList from '../components/TaxonomiesList/TaxonomiesList'

import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'

const DataCategories = DataTaxonomies.categories
// const DataTags = DataTaxonomies.tags

const SingleSpot = props => {
  let Spot = DataItems.filter(function (spot) {
    return spot.slug === props.match.params.slug
  })

  let printname
  let address
  if(Spot.length){
    printname = Spot[0].shorttitle ? Spot[0].shorttitle : Spot[0].title
    address = Spot[0].address + '\n' + Spot[0].hood
  }

  return (
    <div className="PageSingle">
      <Navigation/>
      <div className="Layout Layout--Col-1">
        { /* No coincidence between URL slug and saved spots */ }
        { Boolean(!Spot.length) && (
          <h1>Ups, me parece que no hay nada con ese nombre por acá</h1>
        )}

        { /* Positive coincidence between URL slug and saved spots */ }
        { Boolean(Spot.length) && (
          <div>
            <PageLayoutHeading title={ Spot[0].title } text={ Spot[0].text } />
            <div className="Layout Layout--Col-2 Layout--Inset">
              <PageLayoutImage image={ Spot[0].poster } description={ Spot[0].title } />
              <PageLayoutMap address={ Spot[0].address } hood={ Spot[0].hood } lat={ Spot[0].lat } lon={ Spot[0].lon } title={ printname } />
            </div>
            <TaxonomiesList list={ Spot[0].categories } title="Categorías" scope={ DataCategories } />
            <PageLayoutTextBlock title='Dirección' content={ address } />
            <PageLayoutTextBlock title='Entradas' content={ Spot[0].info_tickets } />
            <PageLayoutTextBlock title='Horarios' content={ Spot[0].info_timetable } />
            <PageLayoutLinksBlock title='Más información' content={ Spot[0].info_more } />
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleSpot
