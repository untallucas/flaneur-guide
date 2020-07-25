import React from 'react'
import Separator from '../Separator/Separator'

import './TextBlock.scss'

const TextBlock = props => {
  if (props.content) {
    return (
      <div className="TextBlock">
        <h2>{ props.title }</h2>
        <ul>
          {
            props.content.split('\n').map((item, key) => {
              return <li key={key}>{item}</li>
            })
          }
        </ul>
        <Separator />
      </div>
    )
  }
  else {
    return null
  }
}

export default TextBlock
