import React from 'react'

import Icon from '../Icon/Icon'

import './FeedbackLink.scss'

const FeedbackLink = props => {
  return (
    <a href="https://forms.gle/E5pAMvgEf5Z5VwKX6" className="FeedbackLink" target="_blank" rel="noopener noreferrer">
      <Icon className="FeedbackLink__Icon" name="feedback" />
    </a>
  )
}

export default FeedbackLink
