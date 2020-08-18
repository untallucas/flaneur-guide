import React from 'react'
import Slider from 'react-slick'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import PageLayoutSeparator from '../components/PageLayoutSeparator/PageLayoutSeparator'
import ItemsGridSpot from '../components/ItemsGridSpot/ItemsGridSpot'

let PageTitle = 'Córdoba'
let PageSubtitle = 'Capital nacional del cuarteto'
let PageDescription = 'Córdoba se encuentra ubicada en la región central del país, a ambas orillas del río Suquía. Es la segunda ciudad más poblada después de Buenos Aires y la más extensa del país.'

const Home = props => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

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

        <Slider {...settings}>
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
          <ItemsGridSpot />
         </Slider>
      </div>
    </div>
  )
}

export default Home




/*
        <h2 className="text-level-2">
          A dónde ir
        </h2>
        <p className="text-body">
          (Slider de Spots)
        </p>

        <PageLayoutSeparator />

        <h2 className="text-level-2">
          Dónde comer
        </h2>
        <p className="text-body">
          (Slider de Restaurants)
        </p>

        <PageLayoutSeparator />

        <h2 className="text-level-2">
          Dónde comprar
        </h2>
        <p className="text-body">
          (Slider de Shopping)
        </p>

        <PageLayoutSeparator />

        <h2 className="text-level-2">
          Qué hacer
        </h2>
        <p className="text-body">
          (Slider de Eventos)
        </p>

        <PageLayoutSeparator />

        <h2 className="text-level-2">
          Recorrer
        </h2>
        <p className="text-body">
          (Slider de Tracks)
        </p>

        <PageLayoutSeparator />

        <h2 className="text-level-2">
          Guía de viaje
        </h2>
        <p className="text-body">
          (Grid de Categorías)
        </p>
*/