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
          <Marker className='PageLayoutMap__Marker' anchor={ [lat, lon] } payload={ 1 } onClick={ ({ event, anchor, payload }) => {  } } />
          <Overlay className='PageLayoutMap__Overlay' anchor={ [lat, lon] } offset={ [80, 220] }>{ props.title }</Overlay>
        </Map>
      </div>
    )
  }
  else {
    return null
  }
}

export default PageLayoutMap
