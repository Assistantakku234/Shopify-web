"use client";
import React, { useState } from "react";
import styles from "./Trending.module.css";
import { CiHeart } from "react-icons/ci";
const initialCards = [
  {
    title: "Analogue Resin Strap",
    description: "$ 30.00",
    defaultImage: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Ridley High Waist",
    description: "$36.00",
    defaultImage: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
  },
  {
    title: "Blush Beanie",
    description: "$15.00",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
  },
  {
    title: "Card 5",
    description: "Description for Card 5",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "Card 6",
    description: "Description for Card 6",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
    sizes: "XS, S, M, L",
  },
  {
    title: "Card 7",
    description: "Description for Card 7",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
    sizes: "S, M, L, XL, XXL",
  },
  {
    title: "Card 8",
    description: "Description for Card 8",
    defaultImage: "/slider-01.jpg",
    hoverImage: "/slider-02.jpg",
    sizes: "XS, S, M, L",
  },
];

export default function Trending() {
  const [cards, setCards] = useState(initialCards);

  const loadMoreCards = () => {
    const newCards = initialCards.map((card, index) => ({
      ...card,
      title: `Card ${cards.length + index + 1}`,
    }));

    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <h2>Trending</h2>
          <div className={styles.line}></div>
        </div>
        <p>Top view in this week</p>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.imgCard}>
            <div className={styles.imageWrapper}>
              <img
                src={card.defaultImage}
                alt={card.title}
                className={styles.imageDefault}
              />
              <img
                src={card.hoverImage}
                alt={`${card.title} hover`}
                className={styles.imageHover}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.topLeftButtons}>
                    <button className={`${styles.smallBtn} ${styles.btn1}`}>
                    <CiHeart className={styles.icon}/>
                    </button>
                    <button className={`${styles.smallBtn} ${styles.btn2}`}>
                      ❤️
                    </button>
                  </div>
                  <div className={styles.centerButtons}>
                    <button className={styles.btn} data-hover="View Details">
                      Quick View
                    </button>
                    <button className={styles.lightBlueBtn}>Quick Shop</button>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardPrice}>{card.description}</p>
      </div>
          </div>
        ))}
      </div>
      <div></div>
      <button className={styles.LoadMoreBtn} onClick={loadMoreCards}>
        Load More
      </button>
    </div>
  );
}
