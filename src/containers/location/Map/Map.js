import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';

const Map = ({ text }) =>{
  return <div><FontAwesomeIcon icon="map-marker-alt"/>{text}</div>
}

export default Map;
