"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import styles from "./Search.module.css";

export default function Searchit() {
  const [searchValue, setSearchValue] = useState("");
  const products = [
    {
      id: 1,
      name: "Analogue Resin Strap",
      price: "$ 30.00",
      image: "/Resin Strap.jpg",
    },
    {
      id: 2,
      name: "Ridley High Waist",
      price: "$36.00",
      image: "/Ridley01.jpg",
    },
    {
      id: 3,
      name: "Blush Beanie",
      price: "$15.00",
      image: "/Blush Beanie01.jpg",
    },
    {
      id: 4,
      name: "Cluse La Baheme Rose Gold",
      price: "$45.00",
      image: "/Gold01.jpg",
    },
    {
      id: 5,
      name: "Mercury Tee",
      price: "$68.00",
      image: "/Mercury01.jpg",
    },
  ];

  const handleSuggestionClick = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBar}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className={styles.searchButton}>
            <FiSearch className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.searchlistContainer}>
          <span className={styles.quickSearch}>Quick Search:</span>
          <ul className={styles.Searchlist}>
            <li onClick={() => handleSuggestionClick("Women")}>Women,</li>
            <li onClick={() => handleSuggestionClick("Men")}>Men,</li>
            <li onClick={() => handleSuggestionClick("New")}>New</li>
          </ul>
        </div>
      </div>
      <div className={styles.inspiration}>Need some inspiration</div>
      <div className={styles.productList}>
        <div className={styles.scrollContainer}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/Product">View All →</Link>
        </div>
      </div>
    </div>
  );
}