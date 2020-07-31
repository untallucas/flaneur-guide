import React from 'react'

import './PageHeading.scss'

const PageHeading = props => {
  return (
    <div className="PageHeading">
      <h1>{ props.title }</h1>
      <p>{ props.text }</p>
    </div>
  )
}

export default PageHeading
