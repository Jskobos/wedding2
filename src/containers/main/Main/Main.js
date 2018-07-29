import React, { Component } from 'react';
import Navbar from '../../navbar/Navbar/Navbar';
import './Main.css';

const links = [
  {
    link: 'about',
    target: 'about'
  },
  {
    link: 'where',
    target: 'location'
  },
  {
    link: 'stay',
    target: 'travel'
  },
  {
    link: 'registry',
    target: 'registry'
  }]

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar links={links}/>
        <div className="header-section">
            <div className="header-section-image">
              <div className="container">
                  <div className="content-center brand">
                      <div className="info-text">
                        <h1>Jared and Cici</h1>
                        <h3>October 14, 2018</h3>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
