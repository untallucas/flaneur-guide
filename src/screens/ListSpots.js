import React from 'react'

import ItemsGrid from '../components/ItemsGrid/ItemsGrid'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'
import Loading from '../components/Loading/Loading'

class ListSpots extends React.Component {
  constructor (props) {
    super(props)
    this.triggerFilter = this.triggerFilter.bind(this)

    let initFilterSlug = props.match.params.filter
    let initTaxonomySlug = props.match.params.taxonomy

    this.state = {
      spotsLoading: true,
      spotsData: [],
      spotsItems: [],
      spotsError: null,
      taxonomiesLoading: true,
      taxonomiesData: [],
      taxonomiesError: null,
      currentFilterTitle: '',
      currentFilterSlug: initFilterSlug,
      currentTaxonomyTitle: null,
      currentTaxonomySlug: initTaxonomySlug,
      currentUrl: null
    }
  }

  fetchSpotsData(taxonomy = '', filter = '') {
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://notion-api.splitbee.io/v1/table/06a53a97c7704fac82906509da256483?v=68cac7916d3f43a08f824ea21fda8fbf'
    fetch(url)
      .then(spotsResponse => spotsResponse.json())
      .then(getSpotsData =>
        this.setState({
          spotsData: getSpotsData.filter(spot => spot.published === 1),
          spotsItems: filter ? getSpotsData.filter(spot => spot.categories.includes(filter) && spot.published === 1) : getSpotsData.filter(spot => spot.published === 1),
          spotsLoading: false
        })
      )
      .catch(spotsError => this.setState({ spotsError, taxonomiesLoading: false }))
  }

  fetchTaxonomiesData(taxonomy = '', filter = '') {
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://notion-api.splitbee.io/v1/table/fa802c44459d4c7c902ada4cde30fed3?v=025e59130a404965bdd4854504da64b8'
    fetch(url)
      .then(taxonomiesResponse => taxonomiesResponse.json())
      .then(getTaxonomiesData =>
        this.setState({
          taxonomiesData: getTaxonomiesData,
          taxonomiesLoading: false,
          currentFilterSlug: filter,
          currentFilterTitle: filter ? '\xa0\xa0·\xa0\xa0' + getTaxonomiesData.filter(taxonomy => taxonomy.slug === filter)[0].title : ''
        }),
      )
      .catch(taxonomiesError => this.setState({ taxonomiesError, taxonomiesLoading: false }))
  }

  componentDidMount() {
    this.fetchSpotsData( this.state.currentTaxonomySlug, this.state.currentFilterSlug )
    this.fetchTaxonomiesData( this.state.currentTaxonomySlug, this.state.currentFilterSlug )
  }

  triggerFilter(taxonomySlug, taxonomyTitle, filterSlug, filterTitle){
    let updateItems
    let updateUrl

    // Filters the items list based on the new filter id only if theres one
    if(filterSlug){
      updateItems = this.state.spotsData.filter(function (item) {
        return item.categories.includes(filterSlug)
      })
      updateUrl = '/lugares/' + taxonomySlug + '/' + filterSlug
    }

    // Or resets list to original state
    else {
      updateItems = this.state.spotsData
      updateUrl = '/lugares'
    }

    // Updates state
    this.setState(
      {
        spotsItems: updateItems,
        currentFilterTitle: filterTitle,
        currentFilterSlug: filterSlug,
        currentTaxonomyTitle: taxonomyTitle,
        currentTaxonomySlug: taxonomySlug,
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
            <PageLayoutHeading title={ 'Lugares' + this.state.currentFilterTitle } />
          </div>

          { /* CATEGORIES */ }
          {
            this.state.taxonomiesError ? <div>{ this.state.taxonomiesError.message }</div> : null
          }
          {
            this.state.taxonomiesLoading ? 
            (<Loading text="Cargando categorías..." />) :
            (
              <ul className="FiltersList">
                { this.state.taxonomiesData.map(taxonomy =>
                  <li key={ taxonomy.id } onClick={() => this.triggerFilter('categorias', 'Categorías', taxonomy.slug, '\xa0\xa0·\xa0\xa0' + taxonomy.title)} className={ this.state.currentFilterSlug === taxonomy.slug ? 'FiltersListItem FiltersListItem__Active' : 'FiltersListItem' }>
                    { taxonomy.title }
                  </li>
                )}
                <li onClick={() => this.triggerFilter(null, null, null, '')} className={ this.state.currentFilterSlug ? 'FiltersListItem FiltersListItem--Clear' : 'FiltersListItem FiltersListItem--Clear FiltersListItem--Clear__Hidden' }>
                  × Quitar filtros
                </li>
              </ul>
            )
          }

          { /* SPOTS */ }
          {
            this.state.spotsError ? <div>{ this.state.spotsError.message }</div> : null 
          }
          {
            this.state.spotsLoading ? 
            (<Loading text="Cargando lugares..." />) : 
            (<ItemsGrid items={ this.state.spotsItems } />)
          }
        </div>
      </div>
    )
  }
}

export default ListSpots
