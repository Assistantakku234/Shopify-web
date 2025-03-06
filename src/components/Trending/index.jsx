"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";
import styles from "./Trending.module.css";

const initialCards = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    image: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    description: "A stylish and durable analogue resin strap.",
    rating: "4.2",
    tag: {
      name: "New",
      color: "#007bff",
    },
    category: "New-Arrival",
  },
  {
    title: "Ridley High Waist",
    price: "36.00",
    image: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    description: "Comfortable and fashionable high waist jeans.",
    rating: "3.8",
    tag: {
      name: "Sale",
      color: "#dc3545",
    },
    category: "New-Arrival",
  },
  {
    title: "Blush Beanie",
    price: "15.00",
    image: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    description: "A warm and cozy blush beanie for winter.",
    rating: "4.9",
    tag: {
      name: "New",
      color: "#007bff",
    },
    category: "New-Arrival",
  },
  {
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    image: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "L",
    description: "Elegant Cluse La Baheme rose gold watch.",
    rating: "3.5",
    tag: {
      name: "Limited",
      color: "#ffc107",
    },
    category: "New-Arrival",
  },
];

export default function Trending({ openPopup }) {
  const [cards, setCards] = useState(initialCards);
  const [popup, setPopup] = useState(null);

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
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    setPopup(index);

    setTimeout(() => {
      setPopup(null);
    }, 1000);
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
            {card.tag && (
              <div
                className={styles.tag}
                style={{ backgroundColor: card.tag.color }}
              >
                {card.tag.name}
              </div>
            )}
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
                    </Link>{" "}
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
