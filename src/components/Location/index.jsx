"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import styles from "./Location.module.css";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  {
    id: 1,
    name: "1471 P St NW",
    address: "Washington DC",
    phone: "(202) 234-7336",
    position: [38.9097, -77.032],
    description: "at 15th St NW",
  },
  {
    id: 2,
    name: "2221 I St NW",
    address: "Washington DC",
    phone: "(202) 507-8357",
    position: [38.9013, -77.047],
    description: "at 22nd St NW",
  },
  {
    id: 3,
    name: "Ha Noi",
    address: "Viet Nam",
    phone: "012345678",
    position: [21.0285, 105.8542],
    description: "",
  },
];

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      <div className={styles.wishlistHero}>
        <div className={styles.imageContainer}>
          <img src="/Location.jpg" alt="Wishlist hero" />
        </div>
        <div className={styles.overlay}>
          <h3>Store locator</h3>
          <p>Home &gt; Store locator</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sidebar}>
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={styles.locationCard}
              onClick={() => setSelectedLocation(loc)}
            >
              <h4>{loc.name}</h4>
              <p>{loc.address}</p>
              <p>{loc.phone}</p>
              <p>{loc.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.mapContainer}>
          <MapContainer
            center={selectedLocation ? selectedLocation.position : [38.9072, -77.0369]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((loc) => (
              <Marker key={loc.id} position={loc.position} icon={markerIcon}>
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.address}
                  <br />
                  {loc.phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
