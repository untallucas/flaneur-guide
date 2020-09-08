import React from 'react'

import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'
import FiltersList from '../components/FiltersList/FiltersList'
import ItemsGrid from '../components/ItemsGrid/ItemsGrid'

import AppData from '../contexts/AppData'

class ListSpots extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.triggerFilter = this.triggerFilter.bind(this)

    let initFilterSlug = props.match.params.filter
    let initTaxonomySlug = props.match.params.taxonomy

    this.state = {
      currentFilterTitle: '',
      currentFilterSlug: initFilterSlug,
      currentTaxonomyTitle: null,
      currentTaxonomySlug: initTaxonomySlug,
      currentUrl: null
    }
  }

  triggerFilter(taxonomySlug, taxonomyTitle, filterSlug, filterTitle, filterId){
    let updateUrl

    // Filters the items list based on the new filter id only if theres one
    if(filterSlug){
      updateUrl = '/lugares/' + taxonomySlug + '/' + filterSlug
    }

    // Or resets list to original state
    else {
      updateUrl = '/lugares'
    }

    // Updates state
    this.setState(
      {
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
    let filterSlug = this.state.currentFilterSlug
    return (
      <div className="Page">

        <Navigation/>

        <div className="Page__Wrapper">
          <div className="Layout Layout--Col-1">
            <PageLayoutHeading title={ 'Lugares' + this.state.currentFilterTitle } />
          </div>

          <AppData.Consumer>
            { AppData => AppData.taxonomies && (
              <FiltersList>
                { AppData.taxonomies.map(taxonomy =>
                  <li key={ taxonomy.id } onClick={() => this.triggerFilter('categorias', 'Categorías', taxonomy.slug, '\xa0\xa0·\xa0\xa0' + taxonomy.title, taxonomy.id)} className={ this.state.currentFilterSlug === taxonomy.slug ? 'FiltersListItem FiltersListItem__Active' : 'FiltersListItem' }>
                    { taxonomy.title }
                  </li>
                )}
                <li onClick={() => this.triggerFilter(null, null, null, '', null)} className={ this.state.currentFilterSlug ? 'FiltersListItem FiltersListItem--Clear' : 'FiltersListItem FiltersListItem--Clear FiltersListItem--Clear__Hidden' }>
                  × Quitar filtros
                </li>
              </FiltersList>
            )}
          </AppData.Consumer>

          <AppData.Consumer>
            { AppData => AppData.spots && (
              <ItemsGrid
                items = { 
                  AppData.spots.filter(function(item){ 
                    // Customize query for different taxonomies
                    return filterSlug ? item.categories.includes( filterSlug ) : item
                  }) 
                }
              />
            )}
          </AppData.Consumer>

        </div>
      </div>
    )
  }
}

export default ListSpots
