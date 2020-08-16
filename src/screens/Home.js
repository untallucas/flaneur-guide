import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import PageLayoutSeparator from '../components/PageLayoutSeparator/PageLayoutSeparator'

let PageTitle = 'Córdoba'
let PageSubtitle = 'Capital nacional del cuarteto'
let PageDescription = 'Córdoba se encuentra ubicada en la región central del país, a ambas orillas del río Suquía. Es la segunda ciudad más poblada después de Buenos Aires y la más extensa del país.'

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

        <PageLayoutSeparator />

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
      </div>
    </div>
  )
}

export default Home
