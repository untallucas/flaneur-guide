import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const SingleTrack = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <h1>
          SingleTrack
          <br/>
          { props.match.params.slug }
        </h1>
        <p>
          title<br/>
          shorttitle<br/>
          text<br/>
          poster<br/>
          runtime<br/>
          spots<br/>
          suggested_schedule<br/>
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

export default SingleTrack
