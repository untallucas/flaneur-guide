import React, { Component } from 'react'
import Navigation from '../components/Navigation/Navigation'

class Test extends Component {
  render () {
    return (
      <div>
        <Navigation/>
        <div>
          <h1>I pledge my life and honor to the Night's Watch, for this night and all the nights to come.</h1>
          <h2>All men must die. House Tarly of Horn Hill Never Resting.</h2>
          <h3>It's ten thousand miles between Kings landing and the wall.</h3>
          <h4>The night is dark and full of terrors. Winter is coming.</h4>
          <h5>Bastards are born of passion, aren't they? We don't despise them in Dorne.</h5>
          <h6>House Tarly of Horn Hill.</h6>
          <p>I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
          <p className='highlight'>The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</p>
        </div>
      </div>
    )
  }
}

export default Test
