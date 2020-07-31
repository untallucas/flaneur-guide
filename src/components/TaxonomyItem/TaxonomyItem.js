import React from 'react'
import { Link } from 'react-router-dom'

import './TaxonomyItem.scss'

const TaxonomyItem = function (props) {
  let url = '../lugares/categoria/' + props.slug
  return (
    <Link className='taxonomyitem' to={ url }>{ props.content }</Link>
  )
}

export default TaxonomyItem
