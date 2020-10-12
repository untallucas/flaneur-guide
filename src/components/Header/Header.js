import React from 'react'

import Icon from '../Icon/Icon'

import './Header.scss'

const Header = props => {
  return (
    <div className="Header">
      <div className="Header__Content">
        <div className="Header__Icon" onClick={ props.history.goBack } >
          <Icon className="Header__Icon" name="arrow-left" color="#FFFFFF" width="32" height="32" />
        </div>
        <span className="Header__Title">{ props.title }</span>
      </div>
    </div>
  )
}

export default Header
