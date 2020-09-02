import React from 'react'

import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'

// import DataItems from '../data/DataItems.js'
import DataTaxonomies from '../data/DataTaxonomies.js'

const DataCategories = DataTaxonomies.categories

class ListSpots extends React.Component {
  constructor (props) {
    super(props)
    this.triggerFilter = this.triggerFilter.bind(this)

    /*
      Declarar state vacío
        spotsRawData (no se toca)
        isLoading
        error
        -
        items (los q muestro)
        filterTitle
        filterSlug
        taxonomyTitle
        taxonomySlug
        url
        
        ...

        onDidMount
        traigo datos
        populo el spotsRawData
    */

    // let initItems
    // let initFilterTitle = ''
    // let initFilterSlug
    // let initTaxonomyTitle
    // let initTaxonomySlug
    // let initTaxonomyItems
    // let initTaxonomyData
    // let knownTaxonomy
    // let initUrl = '/lugares'

    // if( props.match.params.taxonomy === 'categoria' ){
    //   knownTaxonomy = true
    //   initTaxonomyItems = DataTaxonomies.categories
    //   initTaxonomySlug = 'categoria'
    //   initTaxonomyTitle = 'Categoría'
    // }

    // else if( props.match.params.taxonomy === 'autor' ){
    //   knownTaxonomy = true
    //   initTaxonomyItems = DataTaxonomies.author
    //   initTaxonomySlug = 'autor'
    //   initTaxonomyTitle = 'Autor'
    // }

    // else if( props.match.params.taxonomy === 'tag' ){
    //   knownTaxonomy = true
    //   initTaxonomyItems = DataTaxonomies.tags
    //   initTaxonomySlug = 'tag'
    //   initTaxonomyTitle = 'Tag'
    // }

    // else if( props.match.params.taxonomy === 'anio' ){
    //   knownTaxonomy = true
    //   initTaxonomyItems = DataTaxonomies.year
    //   initTaxonomySlug = 'anio'
    //   initTaxonomyTitle = 'Año'
    // }

    // if( props.match.params.filter && knownTaxonomy ){
    //   let filterSlug = props.match.params.filter

    //   // Gets the complete data of the current filter slug
    //   initTaxonomyData = initTaxonomyItems.filter(function (taxonomy) {
    //     return taxonomy.slug === filterSlug
    //   })

    //   // If we find a filter that matches the slug
    //   if(initTaxonomyData.length) {
    //     // Filters the items list based on the filter id
    //     initItems = initItems.filter(function (item) {
    //       return item.categories.includes(initTaxonomyData[0]['id'])
    //     })

    //     // Gets filter title
    //     initFilterTitle = '\xa0\xa0·\xa0\xa0' + initTaxonomyData[0]['title']

    //     // Sets filter slug
    //     initFilterSlug = filterSlug

    //     // Sets url
    //     initUrl = '/lugares' + initTaxonomySlug + '/' + initFilterSlug
    //   }

    //   // No filter match, resets page
    //   else {
    //     knownTaxonomy = false
    //     initTaxonomyItems = null
    //     initTaxonomySlug = null
    //     initTaxonomyTitle = null
    //     this.props.history.replace('/lugares')
    //   }
    // }

    // else {
    //   this.props.history.replace('/lugares')
    // }

    this.state = {
      spotsLoading: true,
      spotsData: [],
      spotsError: null,

      categoriesLoading: true,
      categoriesData: [],
      categoriesError: null,

      // currentItems: initItems,
      // currentFilterTitle: initFilterTitle,
      // currentFilterSlug: initFilterSlug,
      // currentTaxonomyTitle: initTaxonomyTitle,
      // currentTaxonomySlug: initTaxonomySlug,
      // currentUrl: initUrl,
    }
  }

  triggerFilter(updateTaxonomySlug, updateTaxonomyTitle, updateFilterSlug, updateFilterTitle){
    let updateItems
    let updateUrl

    // Filters the items list based on the new filter id only if theres one
    if(updateFilterSlug){
      updateItems = this.state.spotsData.filter(function (item) {
        return item.categories.includes(updateFilterSlug)
      })
      updateUrl = '/lugares/' + updateTaxonomySlug + '/' + updateFilterSlug
    }

    // Or resets list to original state
    else {
      updateItems = this.state.spotsData
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

  fetchSpotsData() {
    fetch('https://notion-api.splitbee.io/v1/table/06a53a97c7704fac82906509da256483?v=68cac7916d3f43a08f824ea21fda8fbf')
      .then(response => response.json())
      .then(getSpotsData =>
        this.setState({
          spotsData: getSpotsData, // .filter(spot => spot.published === 1),
          currentItems: getSpotsData,
          spotsLoading: false,
        })
      )
      .catch(spotsError => this.setState({ spotsError, spotsLoading: false }))
  }

  fetchCategoriesData() {
    fetch('https://notion-api.splitbee.io/v1/table/fa802c44459d4c7c902ada4cde30fed3?v=025e59130a404965bdd4854504da64b8')
      .then(response => response.json())
      .then(getCategoriesData =>
        this.setState({
          categoriesData: getCategoriesData, // .filter(spot => spot.published === 1),
          categoriesItems: getCategoriesData,
          categoriesLoading: false,
        })
      )
      .catch(categoriesError => this.setState({ categoriesError, categoriesLoading: false }))
  }

  fetchCategoriesData() {
    console.log('HOLA')
  }

  componentDidMount() {
    this.fetchSpotsData();
    this.fetchCategoriesData();
  }

  render () {
    return (
      <div className="Page">
        <div className="Page__Wrapper">
          <div className="Layout Layout--Col-1">
            <PageLayoutHeading title={ 'Lugares' + this.state.currentFilterTitle } taxonomy={ this.state.currentTaxonomyTitle } text="" />
          </div>
          <ul className="FiltersList">
            {
              DataCategories.map(function (filter, i) {
                return (
                  <li 
                    key={ i } 
                    onClick={(e) => this.triggerFilter('categoria', 'Categoría', filter.slug, '\xa0\xa0·\xa0\xa0' + filter.title, e)} 
                    className={ this.state.currentFilterSlug === filter.slug ? 'FiltersListItem FiltersListItem__Active' : 'FiltersListItem' }
                    >
                      { filter.title }
                  </li>
                )
              }, this)
            }
            <li 
              onClick={(e) => this.triggerFilter(null, null, null, '', e)}
              className={ this.state.currentFilterSlug ? 'FiltersListItem FiltersListItem--Clear' : 'FiltersListItem FiltersListItem--Clear FiltersListItem--Clear__Hidden' }
            >
              × Quitar filtros
            </li>
          </ul>

          { 
            this.state.categoriesError ? <div>{ this.state.categoriesError.message }</div> : null 
          }

          { 
            this.state.categoriesLoading ? <h3>Cargando categorias...</h3> : <p>SE CARGARON LAS CATS</p> 
          }

          <hr/>

          { 
            this.state.spotsError ? <div>{ this.state.spotsError.message }</div> : null 
          }

          { 
            this.state.spotsLoading ? <h3>Cargando...</h3> : <ItemsGrid items={ this.state.currentItems } /> 
          }
        </div>
      </div>
    )
  }
}

export default ListSpots
