import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.js';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="navbar-items-container">
          <NavItem name='about' target='/about' />
          <NavItem name='location' target='/location' />
          <NavItem name='travel' target='/travel' />
        </div>
      </div>
    );
  }
}

export default Navbar;
