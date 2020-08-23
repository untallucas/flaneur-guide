import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import TaxonomiesList from '../components/TaxonomiesList/TaxonomiesList'
import CardsSlider from '../components/CardsSlider/CardsSlider'

import DataApp from '../data/DataApp.js'
import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'

const PageTitle = DataApp.city.name
const PageSubtitle = DataApp.city.subtitle
const PageDescription = DataApp.city.description
const DataCategories = DataTaxonomies.categories

// Carousels setup
const Slider1 = []
Slider1.Spots = DataItems.filter(function (item) {
  return item.categories.includes(6)
})
Slider1.Title = "A donde ir"
Slider1.Description = "Alguna información sobre esta categoría"

const Slider2 = []
Slider2.Spots = DataItems.filter(function (item) {
  return item.categories.includes(2)
})
Slider2.Title = "Dónde comer"
Slider2.Description = "Detalle de color random del grupo"

const Slider3 = []
Slider3.Spots = DataItems.filter(function (item) {
  return item.categories.includes(5)
})
Slider3.Title = "Dónde comprar"
Slider3.Description = "Algo sobre las opciones que se muestran"

const Slider4 = []
Slider4.Spots = DataItems.filter(function (item) {
  return item.highlight == true
})
Slider4.Title = "Imperdibles"
Slider4.Description = ""

// Taxonomies list setup
const Taxonomies = []
Taxonomies.Title = "Todas las opciones"
Taxonomies.Scope = DataCategories
Taxonomies.List = Taxonomies.Scope.map(function (filter, i) {
  return (
    filter.id
  )
})

const Home = props => {
  console.log(Slider4.Spots)
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

        { Boolean(Slider1.Spots.length) && (
          <CardsSlider type="spots" title={ Slider1.Title } description={ Slider1.Description } spots={ Slider1.Spots } />
        )}

        { Boolean(Slider2.Spots.length) && (
          <CardsSlider type="spots" title={ Slider2.Title } description={ Slider2.Description } spots={ Slider2.Spots } />
        )}

        { Boolean(Slider3.Spots.length) && (
          <CardsSlider type="spots" title={ Slider3.Title } description={ Slider3.Description } spots={ Slider3.Spots } />
        )}

        { Boolean(Slider4.Spots.length) && (
          <CardsSlider type="ranking" title={ Slider4.Title } spots={ Slider4.Spots } />
        )}

        { Boolean(Taxonomies.List.length) && (
          <TaxonomiesList title={ Taxonomies.Title } taxonomy="categoria" list={ Taxonomies.List } scope={ Taxonomies.Scope } />
        )}
      </div>
    </div>
  )
}

export default Home
