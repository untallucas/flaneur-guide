import React from 'react'

import './PageLayoutHeading.scss'

const PageLayoutHeading = props => {
  return (
    <div className="PageLayoutHeading">
      <h1>{ props.title }</h1>
      <p>{ props.text }</p>
    </div>
  )
}

export default PageLayoutHeading
