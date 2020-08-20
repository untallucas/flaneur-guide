import React from 'react'
import { Link } from 'react-router-dom'

import HighlightBadge from '../HighlightBadge/HighlightBadge'

import './HighlightCard.scss'

const HighlightCard = function (props) {
  return (
    <div className="HighlightCard">
      <p className="HighlightCard__Content">{ props.content }</p>
    </div>
  )
}

export default HighlightCard
