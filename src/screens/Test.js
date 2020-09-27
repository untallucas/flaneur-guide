import React from 'react'
// import Mapbox from 'mapbox-gl';

import Navigation from '../components/Navigation/Navigation'
import PageLayoutHero from '../components/PageLayoutHero/PageLayoutHero'
import PageLayoutOpening from '../components/PageLayoutOpening/PageLayoutOpening'
import Icon from '../components/Icon/Icon'
// import Map from '../components/Map/Map'

// Mapbox.accessToken = '';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    }
  }

  // componentDidMount() {
  //   const map = new Mapbox.Map({
  //   container: this.mapContainer,
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [this.state.lng, this.state.lat],
  //   zoom: this.state.zoom
  //   });

  //   var marker = new Mapbox.Marker()
  //   .setLngLat([12.550343, 55.665957])
  //   .addTo(map)
  // }

  render(){
    return (
      <div className="Page">

        {/* <Map/> */}

        <Navigation/>

        <div className="Page__Wrapper">
          <div>
            <PageLayoutHero image='http://lorempixel.com/800/600/city/' title='Basin City' subtitle='A city to die for' />
            <div className="Layout Layout--Col-10">
              <div></div>
              <PageLayoutOpening text='I pledge my life and honor to the Night´s Watch, for this night and all the nights to come. I pledge my life and honor to the Night' />
              <div></div>
            </div>
          </div>

          <div ref={el => this.mapContainer = el} style={{ 'position': 'absolute', 'top': '0', 'right': '0', 'left': '0', 'bottom': '0' }} />

          <div>
            <p className="test-text-1" style={{ 'marginBottom' : '40px' }} >Text Preset 1 · Display</p>
            <p className="test-text-2" style={{ 'marginBottom' : '40px' }} >Text Preset 2 · H1</p>
            <p className="test-text-3" style={{ 'marginBottom' : '40px' }} >Text Preset 3 · H2</p>
            <p className="test-text-4" style={{ 'marginBottom' : '40px' }} >Text Preset 4 · H3</p>
            <p className="test-text-5" style={{ 'marginBottom' : '40px' }} >Text Preset 5 · Body LG</p>
            <p className="test-text-6" style={{ 'marginBottom' : '40px' }} >Text Preset 6 · Body MD</p>
            <p className="test-text-7" style={{ 'marginBottom' : '40px' }} >Text Preset 7 · Body SM</p>
            <p className="test-text-8" style={{ 'marginBottom' : '40px' }} >Text Preset 8 · Body XS</p>
            <p className="test-text-9" style={{ 'marginBottom' : '40px' }} >Text Preset 9</p>
            <p className="test-text-10" style={{ 'marginBottom' : '40px' }} >Text Preset 10</p>
            <p className="test-text-11" style={{ 'marginBottom' : '40px' }} >Text Preset 11</p>
          </div>

          <div>
            <p className="test-text-1" style={{ 'marginBottom' : '40px' }} >Text Preset 1 · Alta Córdoba</p>
            <p className="test-text-2" style={{ 'marginBottom' : '40px' }} >Text Preset 2 · I pledge my life and honor to the Night's Watch, for this night and all the nights to come. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-3" style={{ 'marginBottom' : '40px' }} >Text Preset 3 · All men must die. House Tarly of Horn Hill Never Resting. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-4" style={{ 'marginBottom' : '40px' }} >Text Preset 4 · It's ten thousand miles between Kings landing and the wall. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-5" style={{ 'marginBottom' : '40px' }} >Text Preset 5 · The night is dark and full of terrors. Winter is coming. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-6" style={{ 'marginBottom' : '40px' }} >Text Preset 6 · Bastards are born of passion, aren't they? We don't despise them in Dorne. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-7" style={{ 'marginBottom' : '40px' }} >Text Preset 7 · House Tarly of Horn Hill. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-8" style={{ 'marginBottom' : '40px' }} >Text Preset 8 · The wolf and the lion. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-9" style={{ 'marginBottom' : '40px' }} >Text Preset 9 · I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-10" style={{ 'marginBottom' : '40px' }} >Text Preset 10 · The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. As High as Honor. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-11" style={{ 'marginBottom' : '40px' }} >Text Preset 11 · Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
            <p className="test-text-12" style={{ 'marginBottom' : '40px' }} >Text Preset 12 · A good act does not wash out the bad, nor a bad act the good. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they? I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
          </div>

          <div>
            <Icon name="visual-arts" color="#0000FF" width="24" height="24" />
            <Icon name="cinema" color="#0000FF" width="24" height="24" />
            <Icon name="theatre" color="#0000FF" width="24" height="24" />
            <Icon name="science" color="#0000FF" width="24" height="24" />
            <Icon name="kids" color="#0000FF" width="24" height="24" />
            <Icon name="architecture" color="#0000FF" width="24" height="24" />
            <Icon name="park" color="#0000FF" width="24" height="24" />
            <Icon name="museum" color="#0000FF" width="24" height="24" />
            <Icon name="design" color="#0000FF" width="24" height="24" />
            <Icon name="design-alt-1" color="#0000FF" width="24" height="24" />
            <Icon name="shopping" color="#0000FF" width="24" height="24" />
            <Icon name="bike" color="#0000FF" width="24" height="24" />
            <Icon name="church" color="#0000FF" width="24" height="24" />
            <Icon name="sustainable" color="#0000FF" width="24" height="24" />
            <Icon name="sustainable-alt-1" color="#0000FF" width="24" height="24" />
            <Icon name="sustainable-alt-2" color="#0000FF" width="24" height="24" />
            <Icon name="eat-and-drink" color="#0000FF" width="24" height="24" />
            <Icon name="coffee" color="#0000FF" width="24" height="24" />
            <Icon name="fair" color="#0000FF" width="24" height="24" />
            <Icon name="secrets" color="#0000FF" width="24" height="24" />
            <Icon name="music" color="#0000FF" width="24" height="24" />
            <Icon name="books" color="#0000FF" width="24" height="24" />
            <Icon name="food-truck" color="#0000FF" width="24" height="24" />
            <Icon name="food-truck-alt-1" color="#0000FF" width="24" height="24" />
            <Icon name="binoculars" color="#0000FF" width="24" height="24" />
            <Icon name="lamp" color="#0000FF" width="24" height="24" />
            <Icon name="rock" color="#0000FF" width="24" height="24" />
            <Icon name="camera" color="#0000FF" width="24" height="24" />
            <Icon name="carnival" color="#0000FF" width="24" height="24" />
            <Icon name="carnival-alt-1" color="#0000FF" width="24" height="24" />
            <Icon name="track" color="#0000FF" width="24" height="24" />
            <Icon name="diamond" color="#0000FF" width="24" height="24" />
            <Icon name="globe" color="#0000FF" width="24" height="24" />
            <Icon name="directions" color="#0000FF" width="24" height="24" />
            <Icon name="finger" color="#0000FF" width="24" height="24" />
            <Icon name="calendar" color="#0000FF" width="24" height="24" />
            <Icon name="information" color="#0000FF" width="24" height="24" />
            <Icon name="ticket" color="#0000FF" width="24" height="24" />
            <Icon name="landmark" color="#0000FF" width="24" height="24" />
            <Icon name="plus" color="#0000FF" width="24" height="24" />
            <Icon name="cross" color="#0000FF" width="24" height="24" />
            <Icon name="arrow-left" color="#0000FF" width="24" height="24" />
            <Icon name="arrow-right" color="#0000FF" width="24" height="24" />
            <Icon name="carat-left" color="#0000FF" width="24" height="24" />
            <Icon name="carat-right" color="#0000FF" width="24" height="24" />
            <Icon name="menu" color="#0000FF" width="24" height="24" />
            <Icon name="layout-cards" color="#0000FF" width="24" height="24" />
            <Icon name="layout-grid" color="#0000FF" width="24" height="24" />
            <Icon name="layout-tiles" color="#0000FF" width="24" height="24" />
            <Icon name="map" color="#0000FF" width="24" height="24" />
            <Icon name="map-alt-1" color="#0000FF" width="24" height="24" />
            <Icon name="home" color="#0000FF" width="24" height="24" />
            <Icon name="map-pin" color="#0000FF" width="24" height="24" />
            <Icon name="time" color="#0000FF" width="24" height="24" />
          </div>
        </div>
      </div>
    )
  }
}

export default Test

