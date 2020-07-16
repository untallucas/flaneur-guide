import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render () {
    return (
      <div className="Navigation">
        <ul>
          <li><NavLink to='/' activeClassName="selected">Inicio</NavLink></li>
          <li><NavLink to='/lugares' activeClassName="selected">Todos los lugares</NavLink></li>
          <li><NavLink to='/acerca' activeClassName="selected">Acerca</NavLink></li>
          <li><NavLink to='/test' activeClassName="selected">Test</NavLink></li>
        </ul>
        <hr />
      </div>
    )
  }
}

export default Navigation
