import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './LinkCard.scss'

const LinkCard = function (props) {
  return (
    <div className="LinkCard">
      <Link to={ props.url } className="LinkCard__Link">
        <p className="LinkCard__Content">Ver todos</p>
        <Icon name="carat-right" className="LinkCard__Icon" width='24' height="24" />
      </Link>
    </div>
  )
}

export default LinkCard
