import React from 'react'

import TaxonomiesListItem from '../TaxonomiesListItem/TaxonomiesListItem'

import './TaxonomiesList.scss'

const TaxonomiesList = function (props) {
  return (
    <div className='TaxonomiesList'>
      <h2>{ props.title }</h2>
      <ul>
        {
          props.scope
          .filter(function (taxonomy) {
            return props.list.includes(taxonomy.id)
          })
          .map(function (taxonomy, i) {
            return <TaxonomiesListItem taxonomy={ props.taxonomy } content={ taxonomy.title } icon={ taxonomy.icon } slug={ taxonomy.slug } color={ taxonomy.color } key={ i } />
          })
        }
      </ul>
    </div>
  )
}

export default TaxonomiesList
