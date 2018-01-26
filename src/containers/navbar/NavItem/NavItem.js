import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';


class NavItem extends Component {
  render() {
    return (
      <div className="NavItem">
        <Link to={this.props.target}>
          <i></i>
          <span>{this.props.name}</span>
        </Link>
      </div>
    );
  }
}

export default NavItem;
