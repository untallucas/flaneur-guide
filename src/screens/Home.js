import React from 'react'

import Navigation from '../components/Navigation/Navigation'
// import HeroImage from '../../components/HeroImage/HeroImage'
// import PageHeading from '../../components/PageHeading/PageHeading'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutSeparator from '../components/PageLayoutSeparator/PageLayoutSeparator'

let PageHeadingTitle = 'Córdoba'
let PageHeadingText = 'Córdoba se encuentra ubicada en la región central del país, a ambas orillas del río Suquía. Es la segunda ciudad más poblada después de Buenos Aires y la más extensa del país.'

const Home = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <PageLayoutHero image="https://picsum.photos/400/200" title="Córdoba" subtitle="Capital nacional del cuarteto" />

        <h1>{ PageHeadingTitle }</h1>
        <p>{ PageHeadingText }</p>
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

/*
      <HeroImage image='https://picsum.photos/600/450' description='Córdoba' />
      <PageHeading title={ PageHeadingTitle } text={ PageHeadingText } />
*/