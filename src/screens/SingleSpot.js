import React from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PageLayoutImage from '../components/PageLayoutImage/PageLayoutImage'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import PageLayoutTextBlock from '../components/PageLayoutTextBlock/PageLayoutTextBlock'
import PageLayoutLinksBlock from '../components/PageLayoutLinksBlock/PageLayoutLinksBlock'
import PageLayoutMap from '../components/PageLayoutMap/PageLayoutMap'
import TaxonomiesList from '../components/TaxonomiesList/TaxonomiesList'

import AppData from '../contexts/AppData'

class SingleSpot extends React.Component {
  render(){
    let url = this.props.match.params.slug
    return (
      <div className="Page">

        <Navigation/>
        <Header/>

        <div className="Page__Wrapper Page__Wrapper--BottomPadding">
          <AppData.Consumer>
            { 
              AppData => AppData.spots && (
                <div>
                  {
                    AppData.spots.filter(function(spot){
                      return spot.slug === url
                    }).map(spot =>
                      <div key={ spot.id }>

                        <div className="Grid Grid--Col-12">
                          <div className="Grid__Content">
                            <PageLayoutHeading title={ spot.title } text={ spot.text } />
                          </div>
                        </div>

                        <div className="Grid Grid--Col-6 Grid--FullOnMobile">
                          <PageLayoutImage image={ spot.poster_url ? spot.poster_url[0].url : '' } description={ spot.title } author={ spot.poster_author } link={ spot.poster_link } />
                          <PageLayoutMap id={ spot.id } address={ spot.address } hood={ spot.hood } lat={ spot.lat } lon={ spot.lon } title={ spot.shorttitle ? spot.shorttitle : spot.title } />
                        </div>

                        <div className="Grid Grid--Col-12">
                          <div className="Grid__Content">
                            <TaxonomiesList title="Categorías" taxonomy="categoria" list={ spot.categories } />
                            <PageLayoutTextBlock title='Dirección' content={ spot.address + '\n' + spot.hood } />
                            <PageLayoutTextBlock title='Entradas' content={ spot.info_tickets } />
                            <PageLayoutTextBlock title='Horarios' content={ spot.info_timetable } />
                            <PageLayoutLinksBlock title='Más información'
                              web={ spot.info_more_web }
                              tel={ spot.info_more_tel }
                              email={ spot.info_more_email }
                              facebook={ spot.info_more_facebook }
                              twitter={ spot.info_more_twitter }
                              instagram={ spot.info_more_instagram }
                              snapchat={ spot.info_more_snapchat }
                              whatsapp={ spot.info_more_whatsapp }
                              foursquare={ spot.info_more_foursquare }
                              swarm={ spot.info_more_swarm }
                              yelp={ spot.info_more_yelp }
                              tripadvisor={ spot.info_more_tripadvisor }
                            />
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            }
          </AppData.Consumer>
        </div>

      </div>
    )
  }
}

export default SingleSpot
