import React from 'react'
import FiltersListItem from '../FiltersListItem/FiltersListItem'

import './FiltersList.scss'

/*
const FiltersList = function (props) {
  return (
    <ul className='FiltersList'>
      {
        props.list.map(function (taxonomy, i) {
          return <FiltersListItem title={ taxonomy.title } slug={ taxonomy.slug } id={ taxonomy.id } key={ i } current={ props.current } />
        })
      }
    </ul>
  )
}
*/

const FiltersList = function (props) {
  return (

    <div className="Filters">
      <ul>
        {
          props.list.map(function (filter, i) {
            return (
              <li
                key={ i }
                onClick={ props.trigger('categoria', 'Categoría', filter.slug, filter.title, filter.id) }
                className={ props.current === filter.slug ? 'filterItem active' : 'filterItem' }
              >
                { filter.title }
              </li>
            )
          }, this)
        }
        <li 
          key='0'
          onClick={ props.trigger(null, null, null, 'Todos', null) }
          className={ props.current ? 'filterClear' : 'filterClear hidden' }
        >
          (X Sacar filtros)
        </li>
      </ul>
    </div>
  )
}

export default FiltersList
