import React from 'react'

import './MapMarker.scss'

const MapMarker = ({ id, title }) => 
  <div id={`marker-${id}`} className="MapMarker">
    <div className="MapMarker__Title">{ title }</div>
  </div>


export default MapMarker
