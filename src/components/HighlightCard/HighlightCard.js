import React from 'react'

import './HighlightCard.scss'

const HighlightCard = function (props) {
  return (
    <div className="HighlightCard">
      <p className="HighlightCard__Content">{ props.content }</p>
    </div>
  )
}

export default HighlightCard
