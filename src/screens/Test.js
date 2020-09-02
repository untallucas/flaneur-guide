import React from 'react'

import Navigation from '../components/Navigation/Navigation'
import Icon from '../components/Icon/Icon'

class Test extends React.Component {
  state = {
    isLoading: true,
    spotsData: [],
    error: null
  }

  fetchUsers() {
    fetch('https://notion-api.splitbee.io/v1/table/06a53a97c7704fac82906509da256483?v=68cac7916d3f43a08f824ea21fda8fbf')
      .then(response => response.json())
      .then(getSpotsData =>
        this.setState({
          spotsData: getSpotsData.filter(spot => spot.published === 1),
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render(){
    const { isLoading, spotsData, error } = this.state;
    return (
      <div className="Page">
        <Navigation/>

        <div className="Page__Wrapper">

          { error ? <div style={{ backgroundColor: '#ffb0c0', borderRadius: 8, padding: 12, margin: 24, width: 'auto' }}>{ error.message }</div> : null }

          { !isLoading ? (
            spotsData.map(user => {
              const { title, slug, id, text, poster_url } = user;
              return (
                <div key={ id } style={{ backgroundColor: '#c0b0ff', borderRadius: 8, padding: 12, margin: 24, width: 'auto' }}>
                  <a href={ '/lugares/' + slug } style={{ textDecoration: 'none' }}>
                    <h3>{ id } </h3>
                    <h1>{ title }</h1>
                    <p>{ text }</p>
                    <img src={ 'https://www.notion.so/image/' + encodeURIComponent(poster_url[0].url) } alt='Chupala React' />
                  </a>
                </div>
              );
            })
          ) : (
            <div style={{ backgroundColor: '#b0ffc0', borderRadius: 8, padding: 12, margin: 24, width: 'auto' }}>
              <h3>Loading...</h3>
            </div>
          )}

          <Icon name="visual-arts" color="#44DD00" width="24" height="24" />
          <Icon name="cinema" color="#44DD00" width="24" height="24" />
          <Icon name="theatre" color="#44DD00" width="24" height="24" />
          <Icon name="science" color="#44DD00" width="24" height="24" />
          <Icon name="kids" color="#44DD00" width="24" height="24" />
          <Icon name="architecture" color="#44DD00" width="24" height="24" />
          <Icon name="park" color="#44DD00" width="24" height="24" />
          <Icon name="museum" color="#44DD00" width="24" height="24" />
          <Icon name="design" color="#44DD00" width="24" height="24" />
          <Icon name="design-alt-1" color="#44DD00" width="24" height="24" />
          <Icon name="shopping" color="#44DD00" width="24" height="24" />
          <Icon name="bike" color="#44DD00" width="24" height="24" />
          <Icon name="church" color="#44DD00" width="24" height="24" />
          <Icon name="sustainable" color="#44DD00" width="24" height="24" />
          <Icon name="sustainable-alt-1" color="#44DD00" width="24" height="24" />
          <Icon name="sustainable-alt-2" color="#44DD00" width="24" height="24" />
          <Icon name="eat-and-drink" color="#44DD00" width="24" height="24" />
          <Icon name="coffee" color="#44DD00" width="24" height="24" />
          <Icon name="fair" color="#44DD00" width="24" height="24" />
          <Icon name="secrets" color="#44DD00" width="24" height="24" />
          <Icon name="music" color="#44DD00" width="24" height="24" />
          <Icon name="books" color="#44DD00" width="24" height="24" />
          <Icon name="food-truck" color="#44DD00" width="24" height="24" />
          <Icon name="food-truck-alt-1" color="#44DD00" width="24" height="24" />
          <Icon name="binoculars" color="#44DD00" width="24" height="24" />
          <Icon name="lamp" color="#44DD00" width="24" height="24" />
          <Icon name="rock" color="#44DD00" width="24" height="24" />
          <Icon name="camera" color="#44DD00" width="24" height="24" />
          <Icon name="carnival" color="#44DD00" width="24" height="24" />
          <Icon name="carnival-alt-1" color="#44DD00" width="24" height="24" />
          <Icon name="track" color="#44DD00" width="24" height="24" />
          <Icon name="diamond" color="#44DD00" width="24" height="24" />
          <Icon name="globe" color="#44DD00" width="24" height="24" />
          <Icon name="directions" color="#44DD00" width="24" height="24" />
          <Icon name="finger" color="#44DD00" width="24" height="24" />
          <Icon name="calendar" color="#44DD00" width="24" height="24" />
          <Icon name="information" color="#44DD00" width="24" height="24" />
          <Icon name="ticket" color="#44DD00" width="24" height="24" />
          <Icon name="landmark" color="#44DD00" width="24" height="24" />
          <Icon name="plus" color="#44DD00" width="24" height="24" />
          <Icon name="cross" color="#44DD00" width="24" height="24" />
          <Icon name="arrow-left" color="#44DD00" width="24" height="24" />
          <Icon name="arrow-right" color="#44DD00" width="24" height="24" />
          <Icon name="carat-left" color="#44DD00" width="24" height="24" />
          <Icon name="carat-right" color="#44DD00" width="24" height="24" />
          <Icon name="menu" color="#44DD00" width="24" height="24" />
          <Icon name="layout-cards" color="#44DD00" width="24" height="24" />
          <Icon name="layout-grid" color="#44DD00" width="24" height="24" />
          <Icon name="layout-tiles" color="#44DD00" width="24" height="24" />
          <Icon name="map" color="#44DD00" width="24" height="24" />
          <Icon name="map-alt-1" color="#44DD00" width="24" height="24" />
          <Icon name="home" color="#44DD00" width="24" height="24" />
          <Icon name="map-pin" color="#44DD00" width="24" height="24" />
          <Icon name="time" color="#44DD00" width="24" height="24" />

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

        </div>
      </div>
    )
  }
}

export default Test

