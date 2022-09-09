import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
          <div className="form-check form-switch d-flex">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> {props.mode === 'light' ? 'Enable DarkMode' : 'Enable LightMode'}</label>
          </div>
      </div>
    </nav>
  )
}

export default Navbar

Navbar.propsType = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Text'
}