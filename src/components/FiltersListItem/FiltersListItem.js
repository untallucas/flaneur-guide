import React from 'react'
import { Link } from 'react-router-dom'

import './FiltersListItem.scss'

const FiltersListItem = function (props) {
  console.log( props.current )
  let url = '../lugares/categoria/' + props.slug
  return (
    <li className='FiltersListItem' onClick= { props.onClick }>
      { props.content }
    </li>
  )
}

export default FiltersListItem

// onClick={(e) => this.triggerFilter('categoria', 'Categoría', taxonomy.slug, taxonomy.title, taxonomy.id, e)}
// onClick={(e) => triggerFilter('categoria', 'Categoría', props.slug, props.title, props.id, e)}
