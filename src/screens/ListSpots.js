import React from 'react'

import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'

import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'

const DataCategories = DataTaxonomies.categories

class ListSpots extends React.Component {
  constructor (props) {
    super(props)
    this.triggerFilter = this.triggerFilter.bind(this)

    let initItems = DataItems
    let initFilterTitle = 'Todos'
    let initFilterSlug
    let initTaxonomyTitle
    let initTaxonomySlug
    let initTaxonomyItems
    let initTaxonomyData
    let knownTaxonomy
    let initUrl = '/lugares'

    if( props.match.params.taxonomy === 'categoria' ){
      knownTaxonomy = true
      initTaxonomyItems = DataTaxonomies.categories
      initTaxonomySlug = 'categoria'
      initTaxonomyTitle = 'Categoría'
    }

    else if( props.match.params.taxonomy === 'autor' ){
      knownTaxonomy = true
      initTaxonomyItems = DataTaxonomies.author
      initTaxonomySlug = 'autor'
      initTaxonomyTitle = 'Autor'
    }

    else if( props.match.params.taxonomy === 'tag' ){
      knownTaxonomy = true
      initTaxonomyItems = DataTaxonomies.tags
      initTaxonomySlug = 'tag'
      initTaxonomyTitle = 'Tag'
    }

    else if( props.match.params.taxonomy === 'anio' ){
      knownTaxonomy = true
      initTaxonomyItems = DataTaxonomies.year
      initTaxonomySlug = 'anio'
      initTaxonomyTitle = 'Año'
    }

    if( props.match.params.filter && knownTaxonomy ){
      let filterSlug = props.match.params.filter

      // Gets the complete data of the current filter slug
      initTaxonomyData = initTaxonomyItems.filter(function (taxonomy) {
        return taxonomy.slug === filterSlug
      })

      // If we find a filter that matches the slug
      if(initTaxonomyData.length) {
        // Filters the items list based on the filter id
        initItems = initItems.filter(function (item) {
          return item.categories.includes(initTaxonomyData[0]['id'])
        })

        // Gets filter title
        initFilterTitle = initTaxonomyData[0]['title']

        // Sets filter slug
        initFilterSlug = filterSlug

        // Sets url
        initUrl = '/lugares' + initTaxonomySlug + '/' + initFilterSlug
      }

      // No filter match, resets page
      else {
        knownTaxonomy = false
        initTaxonomyItems = null
        initTaxonomySlug = null
        initTaxonomyTitle = null
        this.props.history.replace('/lugares')
      }
    }

    else {
      this.props.history.replace('/lugares')
    }

    this.state = {
      currentItems: initItems,
      currentFilterTitle: initFilterTitle,
      currentFilterSlug: initFilterSlug,
      currentTaxonomyTitle: initTaxonomyTitle,
      currentTaxonomySlug: initTaxonomySlug,
      currentUrl: initUrl,
    }
  }

  triggerFilter(updateTaxonomySlug, updateTaxonomyTitle, updateFilterSlug, updateFilterTitle, updateFilterId){
    let updateItems
    let updateUrl

    // Filters the items list based on the new filter id only if theres one
    if(updateFilterId){
      updateItems = DataItems.filter(function (item) {
        return item.categories.includes(updateFilterId)
      })
      updateUrl = '/lugares/' + updateTaxonomySlug + '/' + updateFilterSlug
    }

    // Or resets list to original state
    else {
      updateItems = DataItems
      updateUrl = '/lugares'
    }

    this.setState(
      {
        currentItems: updateItems,
        currentFilterTitle: updateFilterTitle,
        currentFilterSlug: updateFilterSlug,
        currentTaxonomyTitle: updateTaxonomyTitle,
        currentTaxonomySlug: updateTaxonomySlug,
        currentUrl: updateUrl
      },
      () => this.props.history.replace( this.state.currentUrl )
    )
  }

  render () {
    return (
      <div className="Page">

        <Navigation/>

        <div className="Page__Wrapper">
          <div className="Layout Layout--Col-1">
            <PageLayoutHeading title="Lugares" text="" />
          </div>
          <div className="Layout Layout--Col-1">
            <p>{ this.state.currentTaxonomyTitle } | { this.state.currentFilterTitle }</p>
          </div>

          <ul className="FiltersList">
            {
              DataCategories.map(function (filter, i) {
                return (
                  <li 
                    key={ i } 
                    onClick={(e) => this.triggerFilter('categoria', 'Categoría', filter.slug, filter.title, filter.id, e)} 
                    className={ this.state.currentFilterSlug === filter.slug ? 'FiltersListItem FiltersListItem__Active' : 'FiltersListItem' }
                    >
                      { filter.title }
                  </li>
                )
              }, this)
            }
            <li 
              onClick={(e) => this.triggerFilter(null, null, null, 'Todos', null, e)}
              className={ this.state.currentFilterSlug ? 'FiltersListItem FiltersListItem--Clear' : 'FiltersListItem FiltersListItem--Clear FiltersListItem--Clear__Hidden' }
            >
              × Quitar filtros
            </li>
          </ul>

          <ItemsGrid items={ this.state.currentItems } />
        </div>
      </div>
    )
  }
}

export default ListSpots
