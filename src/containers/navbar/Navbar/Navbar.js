import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.js';
import './Navbar.css';


class Navbar extends Component {
  render() {
    const links = []
    for (let link of this.props.links) {
      links.push(<NavItem name={link.link} target={link.target} />)
    }

    return (
      <div className="Navbar">
        <div className="navbar-items-container">
          {links}
        </div>
      </div>
    );
  }
}

export default Navbar;
