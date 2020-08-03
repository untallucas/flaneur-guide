import React from 'react'
import ItemsGridSpot from '../ItemsGridSpot/ItemsGridSpot'

import './ItemsGrid.scss'

const ItemsGrid = function (props) {
  return (
    <div className='ItemsGrid'>
      {
        props.items.map(function (spot, i) {
          return <ItemsGridSpot key={i} spot={spot} />
        })
      }
    </div>
  )
}

export default ItemsGrid
