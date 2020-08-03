import React from 'react'

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import './PageLayoutMap.scss'

const PageLayoutMap = props => {
  if (props) {
    let lat = parseFloat(props.lat)
    let lon = parseFloat(props.lon)

    return (
      <div className="PageLayoutMap">
        <Map center={ [lat + 0.005, lon] } zoom={ 14 } height={ 438 }>
          <Marker className='MapMarker' anchor={ [lat, lon] } payload={ 1 } onClick={ ({ event, anchor, payload }) => {  } } />
          <Overlay className='MapOverlay' anchor={ [lat, lon] } offset={ [80, 220] }>{ props.title }</Overlay>
        </Map>
      </div>
    )
  }
  else {
    return null
  }
}

export default PageLayoutMap

/*
  <div className="Card">
    <h2>Ubicación</h2>
    <p>{props.address} - Bº {props.hood}</p>
  </div>
*/
