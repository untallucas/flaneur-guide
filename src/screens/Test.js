import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const Test = function (props) {
  return (
    <div className="PageSingle">
      <Navigation/>
      <div>
        <p className="headline">HEADLINE · Alta Córdoba</p>
        <h1>H1 · I pledge my life and honor to the Night's Watch, for this night and all the nights to come.</h1>
        <h2>H2 · All men must die. House Tarly of Horn Hill Never Resting.</h2>
        <h3>H3 · It's ten thousand miles between Kings landing and the wall.</h3>
        <h4>H4 · The night is dark and full of terrors. Winter is coming.</h4>
        <h5>H5 · Bastards are born of passion, aren't they? We don't despise them in Dorne.</h5>
        <h6>H6 · House Tarly of Horn Hill.</h6>
        <p className="eyebrow">EYEBROW · The wolf and the lion</p>
        <p>BODY · I pledge my life and honor to the Night's Watch, for this night and all the nights to come. When you play the game of thrones, you win or you die. What is dead may never die. Bastards are born of passion, aren't they?</p>
        <p>The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</p>
      </div>

      <div className="Grid">
        <div className="Grid-cell">The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good.</div>
        <div className="Grid-cell">Each should have its own reward. As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good.</div>
        <div className="Grid-cell">Each should have its own reward. As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good.</div>
        <div className="Grid-cell">A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">As High as Honor. Pay the iron price. The Knight of Lemonwood. Dunc the Lunk, thick as a castle wall.</div>
        <div className="Grid-cell">The wolf and the lion. The bear and the maiden fair. A good act does not wash out the bad, nor a bad act the good.</div>
      </div>
    </div>
  )
}

export default Test
