import React from 'react'

import './PageLayoutTitle.scss'

const PageLayoutTitle = props => {
  return (
    <div className="PageLayoutTitle">
      <h1 className='PageLayoutTitle__Title'>{ props.title }</h1>
    </div>
  )
}

export default PageLayoutTitle
