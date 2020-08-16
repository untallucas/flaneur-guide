import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const SingleEvent = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <h1>
          SingleEvent
          <br/>
          { props.match.params.slug }
        </h1>
        <p>
          title<br/>
          shorttitle<br/>
          text<br/>
          poster<br/>
          related_spot<br/>
          artists<br/>
          info_tickets<br/>
          info_timetable<br/>
          info_more<br/>
          tips<br/>
          <br/>
          categories<br/>
          tags
        </p>
      </div>
    </div>
  )
}

export default SingleEvent
