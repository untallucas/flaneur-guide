import React from 'react'
import { Link } from 'react-router-dom'

import './FilterListItem.scss'

const FilterListItem = function (props) {
  let url = '../lugares/categoria/' + props.slug
  return (
    <Link className='FilterListItem' to={ url }>{ props.content }</Link>
  )
}

export default FilterListItem
