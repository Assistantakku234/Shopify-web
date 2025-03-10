"use client";

import React, { useState } from "react";
import styles from "./Location.module.css"


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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8394.645506285018!2d75.89755664996899!3d22.75063819727343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fddaa551a027%3A0xb721ca8321a831b6!2sVoso%20Vyapar!5e0!3m2!1sen!2sin!4v1741608034493!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
