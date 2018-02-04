import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox.js';
import './Location.css';

class Location extends Component {
  render() {
    return (
      <div className="Location">
        <MapBox />
      </div>
    )
  }
}

export default Location;
