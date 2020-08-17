import React from 'react'

import './PageLayoutHeading.scss'

const PageLayoutHeading = props => {
  return (
    <div className="PageLayoutHeading">
      <h1 className='PageLayoutHeading__Title'>{ props.title }</h1>

      { Boolean( props.text ) && (
        <p className='PageLayoutHeading__Blurb'>{ props.text }</p>
      )}
    </div>
  )
}

export default PageLayoutHeading
