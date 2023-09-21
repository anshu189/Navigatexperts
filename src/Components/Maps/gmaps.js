import './gmaps.css';
import React, { useMemo } from 'react';
import busIcon from '../../assets/bus_marker.png';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Gmaps(){
  const API_KEY = "AIzaSyC6FkXwgIyVfh8HlSl4g1Nxy3wM92Iv3gM"; // Replace with your actual API key
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const Ambala = useMemo(() => ({ lat: 30.3782, lng: 76.7767 }), []);
  const manali = useMemo(() => ({ lat: 32.2432, lng: 77.1892 }), []);
  const buscord = useMemo(() => ({ lat: 31.6862, lng: 76.5213}), []); // Mandi

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <div className="main-map-cont">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={Ambala}
          zoom={8}
        >
          <Marker position={Ambala} />
          <Marker position={manali} />
          <Marker
            position={buscord}
            icon={{
              url: busIcon,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
}

export default Gmaps;
