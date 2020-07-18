import React from 'react'
import { Link } from 'react-router-dom'
// import SpotCard from '../../components/SpotCard/SpotCard'
import Navigation from '../components/Navigation/Navigation'
import Separator from '../components/Separator/Separator'

import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'
// const DataCategories = DataTaxonomies.categories

let initItems = DataItems
let initCats = DataTaxonomies.categories

const ListSpots = props => {
  console.log(initItems)
  return (
    <div>
      <Navigation/>
      <h1 className="page-heading">Lugares</h1>
      <div>
      <h2>Categorias</h2>
        {
          initCats.map(function (spot, i) {
            return (
              <span key={ i }>{ spot.title } | </span>
            )
          })
        }
      </div>

      <Separator/>

      <h2>Lugares</h2>
      <ul>
        {
          initItems.map(function (spot, i) {
            let url = '/lugares/' + spot.slug
            return (
              <Link to={ url }>
                <li key={ i }>{ spot.title }<br/>{ spot.address }<br/><br/></li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListSpots


/*
class ListSpots2 extends React.Component {
  constructor (props) {
    super(props)
    this.triggerFilter = this.triggerFilter.bind(this)

    let initTaxonomySlug
    let initTaxonomyData
    let initFilterSlug
    let initFilterTitle = 'Todos'
    let initUrl = props.match.url
    let initItems = DataItems

    if( props.match.params.filter ){
      initFilterSlug = props.match.params.filter

      // Gets the complete data of the current filter (we need the id)
      initTaxonomyData = DataCategories.filter(function (taxonomy) {
        return taxonomy.slug === initFilterSlug
      })

      if(initTaxonomyData.length) {
        // Gets filter title
        initFilterTitle = initTaxonomyData[0]['title']

        // Filters the items list based on the filter id
        initItems = DataItems.filter(function (item) {
          return item.categories.includes(initTaxonomyData[0]['id'])
        })
      }
      else {
        this.props.history.replace('/lugares')
      }
    }

    this.state = {
      currentTaxonomySlug: initTaxonomySlug,
      currentFilterSlug: initFilterSlug,
      currentFilterTitle: initFilterTitle,
      currentUrl: initUrl,
      currentItems: initItems
    }
  }

  triggerFilter(updateFilterSlug, updateFilterTitle, updateFilterId){
    let updateItems
    let updateUrl

    // Filters the items list based on the new filter id only if theres one
    if(updateFilterId){
      updateItems = DataItems.filter(function (item) {
        return item.categories.includes(updateFilterId)
      })
      updateUrl = '/lugares/categoria/' + updateFilterSlug
    }
    // Resets list to original state
    else {
      updateItems = DataItems
      updateUrl = '/lugares'
    }

    this.setState(
      {
        // currentTaxonomySlug: initTaxonomySlug,
        currentFilterSlug: updateFilterSlug,
        currentFilterTitle: updateFilterTitle,
        currentUrl: updateUrl,
        currentItems: updateItems
      },
      () => this.props.history.replace( this.state.currentUrl )
    )
  }

  render () {

    // Taxonomy: Categories
    // esto no tendria q estar en el state???? >> NO PQ ESTO DIBUJA EL MENU SOLAMENTE ???
    if( this.props.match.params.taxonomy === 'categoria' ){
      taxonomies = DataTaxonomies.categories
      currentTaxonomySlug = 'categoria'
    }
    // end comment

    return (
      <div>
        <Navigation/>
        <h1 className="page-heading">Lugares</h1>
        <p className="label">{ this.state.currentFilterTitle }</p>

        <ul>
          {
            DataCategories.map(function (filter, i) {
              let url = '/lugares/' + this.state.currentTaxonomySlug + '/' + filter.slug
              return (
                <li 
                  key={ i } 
                  onClick={(e) => this.triggerFilter(filter.slug, filter.title, filter.id, e)} 
                  style={ this.state.currentFilterSlug === filter.slug ? { 'margin': 16, 'cursor': 'pointer', 'color': 'red' } : { 'margin': 16, 'cursor': 'pointer', 'color': 'gray' } }
                  className={ this.state.currentFilterSlug === filter.slug ? 'item active' : 'item' }
                >
                  { filter.title }
                </li>
              )
            }, this)
          }
          <li 
            key='0'
            onClick={(e) => this.triggerFilter(null, 'Todos', 0, e)} 
            style={ this.state.currentFilterSlug ? { 'display': 'inline', 'margin': 16, 'cursor': 'pointer', 'background': 'red', 'color': 'white', 'padding': 10 } : { 'display': 'none' } }
          >
            (X Sacar filtros)
          </li>
        </ul>
        <div>
        {
          this.state.currentItems.map(function (spot, i) {
            return (
              <SpotCard key={ i } spot={ spot }  />
            )
          })
        }
        </div>
      </div>
    )
  }
}
*/

/*
    // Taxonomy: Authors
    if( this.props.match.params.taxonomy === 'autor' ){
      taxonomies = DataTaxonomies.architects
      currentTaxonomy = 'autor'
    }

    // Taxonomy: Tags
    if( this.props.match.params.taxonomy === 'tag' ){
      taxonomies = DataTaxonomies.tags
      currentTaxonomy = 'tag'
    }

    // Taxonomy: Year
    if( this.props.match.params.taxonomy === 'anio' ){
      taxonomies = DataTaxonomies.year
      currentTaxonomy = 'anio'
    }
*/