import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar/Navbar';
import './Travel.css';

const links = [{
                link: 'home',
                target: 'home'
              }]

class Travel extends Component {
  render() {
    return(
      <div className="Travel">
        <Navbar links={links} pull='pull-right' />
        
      </div>
    )
  }
}

export default Travel;
