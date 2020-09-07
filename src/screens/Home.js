import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'

import CardsSlider from '../components/CardsSlider/CardsSlider'

import AppData from '../contexts/AppData'

let Slider1 = { 
  type: 'spots',
  filter: 'ninos',
  title: 'A donde ir',
  description: 'Alguna información sobre esta categoría'
}

let Slider2 = {
  type: 'spots',
  filter: 'teatro',
  title: 'Dónde comer',
  description: 'Detalle de color random del grupo'
}

let Slider3 = {
  type: 'spots',
  filter: 'compras',
  title: 'Dónde comprar',
  description: 'Algo sobre las opciones que se muestran'
}

let Slider4 = {
  type: 'ranking',
  filter: '',
  title: 'Imperdibles',
  description: ''
}

const Home = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">

        <AppData.Consumer>
          { AppData => AppData.city && (
            <div>
              <PageLayoutHero image={ AppData.city[0].image[0].url } title={ AppData.city[0].name } subtitle={ AppData.city[0].subtitle } />              
              <div className="Layout Layout--Col-10">
                <div></div>
                <PageLayoutOpening text={ AppData.city[0].description } />
                <div></div>
              </div>
            </div>
          )}
        </AppData.Consumer>

        { Boolean(Slider1.filter) && (
          <AppData.Consumer>
            { AppData => AppData.spots && (
              <CardsSlider 
                type = { Slider1.type }
                title = { Slider1.title } 
                description = { Slider1.description } 
                spots = { 
                  AppData.spots.filter(function(item){ 
                    return item.categories.includes(Slider1.filter)
                  }) 
                }
              />
            )}
          </AppData.Consumer>
        )}

        { Boolean(Slider2.filter) && (
          <AppData.Consumer>
            { AppData => AppData.spots && (
              <CardsSlider 
                type = { Slider2.type }
                title = { Slider2.title } 
                description = { Slider2.description } 
                spots = { 
                  AppData.spots.filter(function(item){ 
                    return item.categories.includes(Slider2.filter)
                  }) 
                }
              />
            )}
          </AppData.Consumer>
        )}

        { Boolean(Slider3.filter) && (
          <AppData.Consumer>
            { AppData => AppData.spots && (
              <CardsSlider
                type = { Slider3.type }
                title = { Slider3.title }
                description = { Slider3.description } 
                spots = { 
                  AppData.spots.filter(function(item){ 
                    return item.categories.includes(Slider3.filter)
                  }) 
                }
              />
            )}
          </AppData.Consumer>
        )}

        { Boolean(Slider4.title) && (
          <AppData.Consumer>
            { AppData => AppData.spots && (
              <CardsSlider 
                type = { Slider4.type }
                title = { Slider4.title }
                description = { Slider4.description }
                spots = {
                  AppData.spots.filter(function(item){
                    return item.highlight === 1
                  })
                }
              />
            )}
          </AppData.Consumer>
        )}
      </div>
    </div>
  )
}

export default Home
