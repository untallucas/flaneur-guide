import React from 'react'

import TaxonomiesListItem from '../TaxonomiesListItem/TaxonomiesListItem'

import AppData from '../../contexts/AppData'

import './TaxonomiesList.scss'

const TaxonomiesList = function (props) {
  return (
    <div className='TaxonomiesList'>
      <h2 className='TaxonomiesList__Title'>{ props.title }</h2>
      <AppData.Consumer>
        { AppData => AppData.taxonomies && (
          <div className='TaxonomiesList__Wrapper'>
            {
              AppData.taxonomies
              .filter(function (taxonomy) {
                return props.list.includes(taxonomy.slug)
              })
              .map(function (taxonomy, i) {
                return <TaxonomiesListItem taxonomy={ props.taxonomy } content={ taxonomy.title } icon={ taxonomy.icon } slug={ taxonomy.slug } color={ taxonomy.color } key={ i } />
              })
            }
          </div>
        )}
      </AppData.Consumer>
    </div>
  )
}

export default TaxonomiesList
