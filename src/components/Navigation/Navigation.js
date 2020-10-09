import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './Navigation.scss'

class Navigation extends Component {
  render () {
    return (
        <div className="Navigation">
          <div className="Page__Wrapper">
            <div className="Navigation__Brand">
              <Icon name="map-pin" className="Navigation__Brand__Icon" width="40" height="40" />
              Maapu<br/>
              Córdoba
            </div>
            <div className="Navigation__Menu">
              <NavLink to='/inicio' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
                <span className="Navigation__Text">Inicio</span>
                <Icon className="Navigation__Icon" name="home" width="32" height="32" />
              </NavLink>
              <NavLink to='/lugares' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
                <span className="Navigation__Text">Lugares</span>
                <Icon className="Navigation__Icon" name="layout-grid" width="32" height="32" />
              </NavLink>
              <NavLink to='/acerca' className="Navigation__Item" activeClassName="Navigation__Item--Selected">
                <span className="Navigation__Text">Acerca</span>
                <Icon className="Navigation__Icon" name="information" width="32" height="32" />
              </NavLink>
            </div>
          </div>
        </div>
    )
  }
}

export default Navigation
