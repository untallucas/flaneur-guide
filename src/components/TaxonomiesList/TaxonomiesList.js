import React from 'react'
import TaxonomyItem from '../TaxonomyItem/TaxonomyItem'

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
          return <TaxonomyItem content={ taxonomy.title } slug={ taxonomy.slug } key={ i } />
        })
      }
    </ul>
  )
}

export default TaxonomiesList
