import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import SpotCardsSlider from '../components/SpotCardsSlider/SpotCardsSlider'
import TaxonomiesList from '../components/TaxonomiesList/TaxonomiesList'


import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'

const DataCategories = DataTaxonomies.categories

const poiItems = DataItems.filter(function (item) {
  return item.categories.includes(6)
})

const restaurantsItems = DataItems.filter(function (item) {
  return item.categories.includes(2)
})

const shoppingItems = DataItems.filter(function (item) {
  return item.categories.includes(10)
})

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

        <SpotCardsSlider title="A donde ir" description="Alguna información sobre esta categoría" spots={ poiItems } />

        <SpotCardsSlider title="Dónde comer" description="Detalle de color random del grupo" spots={ restaurantsItems } />

        <SpotCardsSlider title="Dónde comprar" description="Algo sobre las opciones que se muestran" spots={ shoppingItems } />

        <h2 className="text-level-2">
          Guía de viaje
        </h2>
        <TaxonomiesList title=" " taxonomy="categoria" list={ [0,1,2,3,4,5,6,7,8,9,10] } scope={ DataCategories } />
      </div>
    </div>
  )
}

export default Home
