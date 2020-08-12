import React from 'react'

import './PageLayoutTextBlock.scss'

const PageLayoutTextBlock = props => {
  if (props.content) {
    return (
      <div className="PageLayoutTextBlock">
        <h2 className='PageLayoutTextBlock__Title'>{ props.title }</h2>
        <ul>
          {
            props.content.split('\n').map((item, key) => {
              return <li className='PageLayoutTextBlock__Item' key={key}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
  else {
    return null
  }
}

export default PageLayoutTextBlock
