import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox.js';
import Navbar from '../../navbar/Navbar/Navbar.js';
import './Location.css';

const links = [{link: 'home', target: 'home'}];

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <Navbar links={links} pull="pull-right" />
        <div className="banner">Location</div>
        <div className="text-container">
          <div className="location-intro-text portrait">
            <p>
              <div>Our wedding will be held at</div>
              <div>the Carriage House at Rockwood Park</div>
              <div>in Wilmington, Delaware</div>
            </p>
            <div className="divider"></div>
            <p>
              <div>610 Shipley Rd</div>
              <div>Wilmington DE 19809</div>
            </p>
            <a className="button" href='https://www.google.com/maps/place/Rockwood+Park+Carriage+House/@39.7732327,-75.5236861,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6e32f08c42dfd:0x577faed8ddc9f4a5!8m2!3d39.7732327!4d-75.5214974'>Directions on Google</a>
          </div>

          <div className="map-container">
          <MapBox />
        </div>
      </div>
    </div>
    )
  }
}

export default Location;
