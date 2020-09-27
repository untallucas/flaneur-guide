import React from 'react'

import './MapMarker.scss'

const MapMarkerNO = props => {
  return(
    <div id={`marker-${props.id}`} className="MapMarker">
      <div>{ props.title }</div>
    </div>
  )
}

const MapMarker = ({ id, title }) => 
  <div id={`marker-${id}`} className="MapMarker">
    <div className="MapMarker__Title">{ title }</div>
  </div>


export default MapMarker
