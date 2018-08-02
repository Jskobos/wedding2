import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.js';
import './Navbar.css';


class Navbar extends Component {
  render() {
    const links = []
    this.props.links.map((link,idx) => {
      links.push(<NavItem key={idx} name={link.link} target={link.target} />)
    });

    return (
      <div className="Navbar">
        <div className={"navbar-items-container " + this.props.pull}>
          {links}
        </div>
      </div>
    );
  }
}

export default Navbar;
