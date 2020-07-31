import React from 'react'

import './TextBlock.scss'

const TextBlock = props => {
  if (props.content) {
    return (
      <div className="TextBlock">
        <h2>{ props.icon }</h2>
        <h2>{ props.title }</h2>
        <ul>
          {
            props.content.split('\n').map((item, key) => {
              return <li key={key}>{item}</li>
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

export default TextBlock
