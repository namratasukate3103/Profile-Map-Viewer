import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ selectedProfile }) {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {selectedProfile && (
        <Marker position={[selectedProfile.lat, selectedProfile.lng]}>
          <Popup>{selectedProfile.name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;