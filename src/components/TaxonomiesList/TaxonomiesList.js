import React from 'react'
import TaxonomiesListItem from '../TaxonomiesListItem/TaxonomiesListItem'

import './TaxonomiesList.scss'

const TaxonomiesList = function (props) {
  return (
    <ul className='TaxonomiesList'>
      {
        props.scope
        .filter(function (taxonomy) {
          return props.list.includes(taxonomy.id)
        })
        .map(function (taxonomy, i) {
          return <TaxonomiesListItem content={ taxonomy.title } slug={ taxonomy.slug } key={ i } />
        })
      }
    </ul>
  )
}

export default TaxonomiesList
