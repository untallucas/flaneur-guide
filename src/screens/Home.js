import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import FeedbackLink from '../components/FeedbackLink/FeedbackLink'

import CardsSlider from '../components/CardsSlider/CardsSlider'

import AppData from '../contexts/AppData'

let Slider1 = { 
  count: 0,
  type: 'spots',
  filter: 'aire-libre',
  title: 'Al aire libre',
  description: '',
  url: 'lugares/categoria/aire-libre'
}

let Slider2 = {
  count: 0,
  type: 'spots',
  filter: 'comer-y-beber',
  title: 'Dónde comer',
  description: '',
  url: 'lugares/categoria/comer-y-beber'
}

let Slider3 = {
  count: 0,
  type: 'spots',
  filter: 'compras',
  title: 'Dónde comprar',
  description: '',
  url: 'lugares/categoria/compras'
}

let Slider4 = {
  count: 0,
  type: 'ranking',
  title: 'Imperdibles'
}

class Home extends React.Component {
  componentDidMount() {
    this.setState({})
    Slider1.count = 0
    Slider2.count = 0
    Slider3.count = 0
    Slider4.count = 0
  }

  render(){
    return (
      <div className="Page">

        <FeedbackLink />
        <Navigation/>

        <div className="Page__Wrapper Page__Wrapper--BottomPaddingLess">

          <AppData.Consumer>
            { AppData => AppData.city && (
              <div>
                <PageLayoutHero image={ AppData.city[0].image[0].url } title={ AppData.city[0].name } subtitle={ AppData.city[0].subtitle } />
                <div className="Grid Grid--Col-10">
                  <div className="Grid__Content">
                    <PageLayoutOpening text={ AppData.city[0].description } />
                  </div>
                </div>
              </div>
            )}
          </AppData.Consumer>

          { Boolean(Slider1.filter) && (
            <div className="Grid Grid--Col-12">
              <div className="Grid__Content">
                <AppData.Consumer>
                  { AppData => AppData.spots && (
                    <CardsSlider
                      type = { Slider1.type }
                      title = { Slider1.title }
                      description = { Slider1.description }
                      url = { Slider1.url }
                      spots = {
                        AppData.spots.filter(function(item){
                          return item.categories.includes(Slider1.filter) && Slider1.count++ < 5
                        })
                      }
                    />
                  )}
                </AppData.Consumer>
              </div>
            </div>
          )}

          { Boolean(Slider2.filter) && (
            <div className="Grid Grid--Col-12">
              <div className="Grid__Content">
                <AppData.Consumer>
                  { AppData => AppData.spots && (
                    <CardsSlider
                      type = { Slider2.type }
                      title = { Slider2.title } 
                      description = { Slider2.description } 
                      url = { Slider2.url } 
                      spots = { 
                        AppData.spots.filter(function(item){ 
                          return item.categories.includes(Slider2.filter) && Slider2.count++ < 5
                        }) 
                      }
                    />
                  )}
                </AppData.Consumer>
              </div>
            </div>
          )}

          { Boolean(Slider3.filter) && (
            <div className="Grid Grid--Col-12">
              <div className="Grid__Content">
                <AppData.Consumer>
                  { AppData => AppData.spots && (
                    <CardsSlider
                      type = { Slider3.type }
                      title = { Slider3.title }
                      description = { Slider3.description } 
                      url = { Slider3.url } 
                      spots = { 
                        AppData.spots.filter(function(item){ 
                          return item.categories.includes(Slider3.filter) && Slider3.count++ < 5
                        }) 
                      }
                    />
                  )}
                </AppData.Consumer>
              </div>
            </div>
          )}

          { Boolean(Slider4.title) && (
            <div className="Grid Grid--Col-12">
              <div className="Grid__Content">
                <AppData.Consumer>
                  { AppData => AppData.spots && (
                    <CardsSlider 
                      type = { Slider4.type }
                      title = { Slider4.title }
                      spots = {
                        AppData.spots.filter(function(item){
                          return item.highlight === 1 && Slider4.count++ < 6
                        })
                      }
                    />
                  )}
                </AppData.Consumer>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
