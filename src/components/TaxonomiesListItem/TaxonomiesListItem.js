import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './TaxonomiesListItem.scss'

const TaxonomiesListItem = function (props) {
  let url = '../lugares/' + props.taxonomy +'/' + props.slug
  return (
    <div className='TaxonomiesListItem' style={{ 'backgroundColor' : props.color }}>
      <Link to={ url }>
        <Icon name={ props.icon } color="#FFFFFF" />
        { props.content }
      </Link>
    </div>
  )
}

export default TaxonomiesListItem
