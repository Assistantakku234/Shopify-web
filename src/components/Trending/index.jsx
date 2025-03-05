"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Trending.module.css";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";

const initialCards = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    image: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    description: "A stylish and durable analogue resin strap.",
  },
  {
    title: "Ridley High Waist",
    price: "36.00",
    image: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    description: "Comfortable and fashionable high waist jeans.",
  },
  {
    title: "Blush Beanie",
    price: "15.00",
    image: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    description: "A warm and cozy blush beanie for winter.",
  },
  {
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    image: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "L",
    description: "Elegant Cluse La Baheme rose gold watch.",
  },
];

export default function Trending({ openPopup }) {
  const [cards, setCards] = useState(initialCards);
  const [popup, setPopup] = useState(null); // Track which item is added

  const loadMoreCards = () => {
    const newCards = initialCards.map((card, index) => ({
      ...card,
      title: `Card ${cards.length + index + 1}`,
    }));

    setCards((prevCards) => [...prevCards, ...newCards]);
  };

  const handleAddToCart = (card, index) => {
    const cartItem = {
      title: card.title,
      price: card.price,
      image: card.image,
    };

    // Get existing cart from local storage or create an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Show popup next to clicked button
    setPopup(index);

    // Hide popup after 2 seconds
    setTimeout(() => setPopup(null), 2000);
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
                src={card.image}
                alt={card.title}
                className={styles.imageDefault}
              />
              <img
                src={card.hoverImage}
                alt={`${card.title} second Image`}
                className={styles.imageHover}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.topLeftButtons}>
                    <button className={`${styles.smallBtn} ${styles.btn1}`}>
                      <CiHeart className={styles.icon} />
                    </button>
                    <button className={`${styles.smallBtn} ${styles.btn2}`}>
                      <TbArrowsCross className={styles.icon} />
                    </button>
                  </div>
                  <div className={styles.centerButtons}>
                    <button
                      className={styles.addToCartBtn}
                      onClick={() => handleAddToCart(card, index)}
                    >
                      Add to Cart
                    </button>
                    <Link
                      href="/ViewItem"
                      onClick={() =>
                        localStorage.setItem("viewedItem", JSON.stringify(card))
                      }
                    >
                      <button className={styles.buyNowBtn}>Buy Now</button>
                    </Link>
                  </div>
                  <p className={styles.footerText}>{card.sizes}</p>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardPrice}>{` $ ${card.price}`}</p>
            </div>
            {popup === index && (
              <div className={styles.popup}>Added to cart!</div>
            )}
          </div>
        ))}
      </div>
      <button className={styles.LoadMoreBtn} onClick={loadMoreCards}>
        Load More
      </button>
    </div>
  );
}
