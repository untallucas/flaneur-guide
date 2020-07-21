import React from 'react'
import SpotCard from '../SpotCard/SpotCard'

import './ItemsGrid.scss'

const ItemsGrid = function (props) {
  return (
    <div className='ItemsGrid'>
      {
        props.items.map(function (spot, i) {
          return <SpotCard key={i} spot={spot} />
        })
      }
    </div>
  )
}

export default ItemsGrid
