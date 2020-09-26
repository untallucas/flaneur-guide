import React from 'react'
import Mapbox from 'mapbox-gl';
// import MapGL, {NavigationControl, Marker,Popup} from ‘react-map-gl’;

import './PageLayoutMap.scss'

Mapbox.accessToken = '';

class PageLayoutMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: props.lon,
      lat: props.lat,
      zoom: 14
    }
  }

  componentDidMount() {
    const map = new Mapbox.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [ this.state.lng, this.state.lat ],
      zoom: 14
    })

    var marker = new Mapbox.Marker()
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
