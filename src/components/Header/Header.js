import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './Header.scss'

class Header extends Component {
  render () {
    return (
        <div className="Header">
          <div className="Header__Content">
            <NavLink to='/' className="Header__Icon">
              <Icon className="Header__Icon" name="arrow-left" color="#FFFFFF" width="32" height="32" />
            </NavLink>
            <span className="Header__Title">*****</span>
          </div>
        </div>
    )
  }
}

export default Header
