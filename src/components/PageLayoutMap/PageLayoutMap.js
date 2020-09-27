import React from 'react'
import ReactDOM from 'react-dom'
import Mapbox from 'mapbox-gl';

import MapMarker from '../MapMarker/MapMarker'

import './PageLayoutMap.scss'

Mapbox.accessToken = process.env.MAPBOX_ACCESS_TOKEN

class PageLayoutMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      lng: props.lon,
      lat: props.lat,
      title: props.title,
      zoom: 14
    }
  }

  componentDidMount() {
    const map = new Mapbox.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [ this.state.lng, this.state.lat + 0.0045 ],
      zoom: 14
    })

    map.addControl(new Mapbox.NavigationControl(), 'bottom-right');

    const markerNode = document.createElement('div')
    ReactDOM.render(<MapMarker id={ 'marker_' + this.state.id } title={ this.state.title } />, markerNode)

    var marker = new Mapbox.Marker(markerNode)
      .setLngLat([ this.state.lng, this.state.lat ])
      .addTo(map)
  }

  render(){
    return (
      <div className="PageLayoutMap">
        <div ref={el => this.mapContainer = el} className="PageLayoutMap__Canvas" />
      </div>
    )
  }
}

export default PageLayoutMap
