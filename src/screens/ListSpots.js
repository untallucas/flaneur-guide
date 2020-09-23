import React from 'react'

import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
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
        <Header/>

        <div className="Page__Wrapper Page__Wrapper--BottomPadding">

          <div className="Grid Grid--Col-12">
            <div className="Grid__Content">
              <PageLayoutHeading title={ 'Lugares' + this.state.currentFilterTitle } />
            </div>
          </div>

          <div className="Grid Grid--Col-12">
            <div className="Grid__Content">
              <AppData.Consumer>
                { AppData => AppData.taxonomies && (
                  <FiltersList>
                    { AppData.taxonomies.map(taxonomy =>
                      <li key={ taxonomy.id } onClick={() => this.triggerFilter('categorias', 'Categorías', taxonomy.slug, '\xa0\xa0·\xa0\xa0' + taxonomy.title, taxonomy.id)} className={ this.state.currentFilterSlug === taxonomy.slug ? 'FiltersList__Item FiltersList__Item__Active' : 'FiltersList__Item' }>
                        { taxonomy.title }
                      </li>
                    )}
                    <li onClick={() => this.triggerFilter(null, null, null, '', null)} className={ this.state.currentFilterSlug ? 'FiltersList__Item FiltersList__Item--Clear' : 'FiltersList__Item FiltersList__Item--Clear FiltersList__Item--Clear__Hidden' }>
                      × Quitar filtros
                    </li>
                  </FiltersList>
                )}
              </AppData.Consumer>
            </div>
          </div>

          <div className="Grid Grid--Col-12">
            <div className="Grid__Content">
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

        </div>
      </div>
    )
  }
}

export default ListSpots
