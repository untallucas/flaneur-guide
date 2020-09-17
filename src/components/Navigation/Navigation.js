import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './Navigation.scss'

class Navigation extends Component {
  render () {
    return (
        <div className="Navigation">
          <NavLink to='/inicio' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
            <Icon className="Navigation__Icon" name="home" color="#FFFFFF" width="32" height="32" />
          </NavLink>
          <NavLink to='/lugares' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
            <Icon className="Navigation__Icon" name="layout-grid" color="#FFFFFF" width="32" height="32" />
          </NavLink>
          <NavLink to='/acerca' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
            <Icon className="Navigation__Icon" name="information" color="#FFFFFF" width="32" height="32" />
          </NavLink>
        </div>
    )
  }
}

export default Navigation
