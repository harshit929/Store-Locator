// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ stores }) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD0wv0BFa6vgrKIOBGzxNujr3X2AnSpC_Y">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {stores.map((store) => (
          <Marker key={store.id} position={{ lat: store.latitude, lng: store.longitude }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
