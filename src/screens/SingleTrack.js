import React from 'react'

import Navigation from '../components/Navigation/Navigation'

const SingleTrack = props => {
  return (
    <div className="PageSingle">
      <Navigation/>
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
  )
}

export default SingleTrack
