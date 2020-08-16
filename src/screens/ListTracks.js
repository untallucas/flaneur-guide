import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const ListTracks = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <h1>
          ListTracks
          <br/>
          { props.match.params.filter }
        </h1>
        <ul>
          <li>Track 1</li>
          <li>Track 2</li>
          <li>Track 3</li>
          <li>Track 4</li>
          <li>Track 5</li>
        </ul>
      </div>
    </div>
  )
}

export default ListTracks
