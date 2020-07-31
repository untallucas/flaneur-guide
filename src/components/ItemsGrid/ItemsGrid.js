import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

import './ItemsGrid.scss'

const ItemsGrid = function (props) {
  return (
    <div className='ItemsGrid'>
      {
        props.items.map(function (spot, i) {
          return <ItemCard key={i} spot={spot} />
        })
      }
    </div>
  )
}

export default ItemsGrid
