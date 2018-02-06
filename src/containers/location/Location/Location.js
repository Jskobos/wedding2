import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox.js';
import './Location.css';

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <div className="banner">Location</div>
        <div className="text-container">
          <div className="location-intro-text">
            <p>Our wedding will be held at the Carriage House at Rockwood Park in Wilmington, DE.</p>
            <a className="google-link" href='https://www.google.com/maps/place/Rockwood+Park+Carriage+House/@39.7732327,-75.5236861,17z/data=!3m1!4b1!4m5!3m4!1s0x89c6e32f08c42dfd:0x577faed8ddc9f4a5!8m2!3d39.7732327!4d-75.5214974'>Directions on Google</a>
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
