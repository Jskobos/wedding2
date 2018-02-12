import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar/Navbar';
import './About.css';

const links = [{
                link: 'home',
                target: 'home'
              }]

class About extends Component {
  render() {
    return(
      <div className="About">
        <Navbar links={links} pull='pull-right' />
        <h1>Coming Soon</h1>
      </div>
    )
  }
}

export default About;
