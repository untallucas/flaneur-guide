import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './TaxonomiesListItem.scss'

const TaxonomiesListItem = function (props) {
  let url = '../lugares/' + props.taxonomy +'/' + props.slug
  return (
    <Link to={ url } className="TaxonomiesListItem" style={{ 'backgroundColor' : props.color }}>
      <Icon className="TaxonomiesListItem__Icon" name={ props.icon } color="#FFFFFF" />
      <h3 className="TaxonomiesListItem__Title">{ props.content }</h3>
    </Link>
  )
}

export default TaxonomiesListItem
