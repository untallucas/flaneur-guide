import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './TaxonomiesListItem.scss'

const TaxonomiesListItem = function (props) {
  let url = '../lugares/' + props.taxonomy +'/' + props.slug
  return (
    <div className='TaxonomiesListItem'>
      <Link to={ url } className="TaxonomiesListItem__Link">
        <Icon className="TaxonomiesListItem__Icon" name={ props.icon } color="#FFFFFF" style={{ 'backgroundColor' : props.color }} />
        <h3 className="TaxonomiesListItem__Title">{ props.content }</h3>
      </Link>
    </div>
  )
}

export default TaxonomiesListItem
