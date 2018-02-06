import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from '../Map/Map';

const styles = {
  'width': '50vw',
  'height': '50vh'
}

class MapBox extends Component {
  static defaultProps = {
    center: {lat: 39.773233, lng: -75.521495},
    zoom: 11
  };

  render() {
    return (
      <div className="MapBox" style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Map
          lat={39.773233}
          lng={-75.521495}
          text={'Carriage House'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default MapBox;
