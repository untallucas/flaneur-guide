import React from 'react'
import FilterListItem from '../FilterListItem/FilterListItem'

import './FiltersList.scss'

const FiltersList = function (props) {
  return (
    <ul className='FiltersList'>
      {
        props.scope
        .filter(function (taxonomy) {
          return props.list.includes(taxonomy.id)
        })
        .map(function (taxonomy, i) {
          return <FilterListItem content={ taxonomy.title } slug={ taxonomy.slug } key={ i } />
        })
      }
    </ul>
  )
}

export default FiltersList
