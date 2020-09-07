import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'

import CardsSlider from '../components/CardsSlider/CardsSlider'

import AppData from '../contexts/AppData'

const PageTitle = 'Córdoba'
const PageSubtitle = 'Capital mundial del fernét'
const PageDescription = 'Córdoba se encuentra ubicada en la región central del país, a ambas orillas del río Suquía. Es la segunda ciudad más poblada después de Buenos Aires y la más extensa del país.'

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
        <PageLayoutHero image="https://4.bp.blogspot.com/-_qLOnzlz6ks/WIYW_KKbv9I/AAAAAAAACZw/9860q5Gz35kP7tGs1s-LowtAoOXKOVNdgCK4B/s1600/terminaldecordoba.jpg" title={ PageTitle } subtitle={ PageSubtitle } />

        <div className="Layout Layout--Col-10">
          <div></div>
          <PageLayoutOpening text={ PageDescription } />
          <div></div>
        </div>

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
