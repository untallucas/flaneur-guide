import React from 'react'

import Icon from '../Icon/Icon'

import './HighlightBadge.scss'

const HighlightBadge = props => {
  return (
    <div className="HighlightBadge">
      <Icon className="HighlightBadge__Icon" name="finger" color="#FF00CC" width="40" height="40" />
    </div>
  )
}

export default HighlightBadge
