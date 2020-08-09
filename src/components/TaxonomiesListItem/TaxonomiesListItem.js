import React from 'react'
import { Link } from 'react-router-dom'

import './TaxonomiesListItem.scss'

const TaxonomiesListItem = function (props) {
  let url = '../lugares/categoria/' + props.slug
  return (
    <Link className='TaxonomiesListItem' to={ url } style={{ 'backgroundColor' : props.color }} >{ props.content }</Link>
  )
}

export default TaxonomiesListItem
