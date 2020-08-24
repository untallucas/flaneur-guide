import React from 'react'

import SpotCard from '../SpotCard/SpotCard'

import './ItemsGrid.scss'

const ItemsGrid = function (props) {
  return (
    <div className='ItemsGrid'>
      { Boolean(!props.items.length) && (
        <p>No hay resultados. Probá modificando los filtros.</p>
      )}
      { Boolean(props.items.length) && (
        props.items.map(function (spot, i) {
          return <SpotCard key={i} spot={spot} />
        })
      )}
    </div>
  )
}

export default ItemsGrid
