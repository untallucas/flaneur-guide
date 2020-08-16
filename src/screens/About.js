import React from 'react'

import PageLayoutHeading from '../components/PageLayoutHeading/PageLayoutHeading'
import Navigation from '../components/Navigation/Navigation'

const About = props => {
  return (
    <div className="Page">

      <Navigation/>

      <div className="Page__Wrapper">
        <div className="Layout Layout--Col-1">
          <PageLayoutHeading title="Acerca" text="dsfdsfdsfdss dfds fds f dsf sdf " />
        </div>
      </div>
    </div>
  )
}

export default About
