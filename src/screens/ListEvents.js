import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const ListEvents = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <h1>
          ListEvents
          <br/>
          { props.match.params.filter }
        </h1>
        <ul>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
          <li>Event 4</li>
          <li>Event 5</li>
        </ul>
      </div>
    </div>
  )
}

export default ListEvents
