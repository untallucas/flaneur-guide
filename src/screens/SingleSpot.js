import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutImage from '../components/PageLayoutImage/PageLayoutImage'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import PageLayoutTextBlock from '../components/PageLayoutTextBlock/PageLayoutTextBlock'
import PageLayoutLinksBlock from '../components/PageLayoutLinksBlock/PageLayoutLinksBlock'
import PageLayoutMap from '../components/PageLayoutMap/PageLayoutMap'
import TaxonomiesList from '../components/TaxonomiesList/TaxonomiesList'

import AppData from '../contexts/AppData'

const SingleSpot = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <div className="Layout Layout--Col-1">
          <AppData.Consumer>
            { AppData => AppData.spots && (
              <div>
              {
                AppData.spots.filter(function(spot){ 
                  return spot.slug === props.match.params.slug
                }).map(spot =>
                  <div key={ spot.id }>
                    <PageLayoutHeading title={ spot.title } text={ spot.text } />
                    <div className="Layout Layout--Col-2 Layout--Inset">
                      <PageLayoutImage image={ spot.poster } description={ spot.title } />
                      <PageLayoutMap address={ spot.address } hood={ spot.hood } lat={ spot.lat } lon={ spot.lon } title={ spot.shorttitle ? spot.shorttitle : spot.title } />
                    </div>
                    <TaxonomiesList title="Categorías" taxonomy="categoria" list={ spot.categories } />
                    <PageLayoutTextBlock title='Dirección' content={ spot.address + '\n' + spot.hood } />
                    <PageLayoutTextBlock title='Entradas' content={ spot.info_tickets } />
                    <PageLayoutTextBlock title='Horarios' content={ spot.info_timetable } />
                    <PageLayoutLinksBlock title='Más información' content={ spot.info_more } />
                  </div>
                )}
              </div>
            )}
          </AppData.Consumer>
        </div>
      </div>
    </div>
  )
}

export default SingleSpot
