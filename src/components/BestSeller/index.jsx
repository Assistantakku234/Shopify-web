"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";
import QuickShopPopup from "@/components/QuickShopPopup";
import styles from "./Bestseller.module.css";

const cardsData = [
  {
    title: "Backpack",
    price: "36.00",
    image: "/Backpack01.jpg",
    hoverImage: "/Backpack02.jpg",
    sizes: "XS, S, M, L",
    description: "A stylish and durable backpack.",
    rating: "4.5",
    tag: { name: "New", color: "#007bff" },
    category: "Accessories",
    NewArrival: true,
  },
  {
    title: "Women Pants",
    price: "24.99",
    image: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L",
    description:
      "Comfortable and breathable pants perfect for casual and formal wear.",
    rating: "4.0",
    tag: { name: "Sale", color: "#dc3545" },
    category: "Women's Clothing",
    NewArrival: true,
  },
  {
    title: "Mercury Watch",
    price: "19.50",
    image: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "XS, S, M, L",
    description: "A sleek and modern timepiece with a minimalist design.",
    rating: "4.8",
    tag: { name: "New", color: "#007bff" },
    category: "Watches",
    NewArrival: true,
  },
  {
    title: "Men Pants",
    price: "29.99",
    image: "/MenPants01.jpg",
    hoverImage: "/MenPants02.jpg",
    description:
      "Premium quality men’s pants with a relaxed fit and stylish look.",
    rating: "3.9",
    tag: { name: "Limited", color: "#ffc107" },
    category: "Men's Clothing",
    NewArrival: true,
  },
  {
    title: "Hoodie",
    price: "42.00",
    image: "/Hoodie01.jpg",
    hoverImage: "/Hoodie02.jpg",
    sizes: "S, M, L, XL, XXL",
    description:
      "Cozy and warm hoodie made from soft fleece for maximum comfort.",
    rating: "4.6",
    tag: { name: "New", color: "#007bff" },
    category: "Outerwear",
    NewArrival: true,
  },
  {
    title: "Ridley Jacket",
    price: "18.75",
    image: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "XS, S, M, L",
    description: "A trendy and lightweight jacket perfect for layering.",
    rating: "3.7",
    tag: { name: "Sale", color: "#dc3545" },
    category: "Outerwear",
    NewArrival: true,
  },
  {
    title: "Blush Beanie",
    price: "12.50",
    image: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "S, M, L, XL, XXL",
    description:
      "Soft knit beanie to keep you warm and stylish in cold weather.",
    rating: "4.9",
    tag: { name: "New", color: "#007bff" },
    category: "Hats",
    NewArrival: true,
  },
  {
    title: "Snapback Cap",
    price: "15.99",
    image: "/snapback01.jpg",
    hoverImage: "/snapback02.jpg",
    sizes: "XS, S, M, L",
    description:
      "Classic snapback cap with an adjustable fit for everyday wear.",
    rating: "4.2",
    tag: { name: "Limited", color: "#ffc107" },
    category: "Hats",
    NewArrival: true,
  },
];

export default function BestSeller() {
  const [cards, setCards] = useState(cardsData);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [popup, setPopup] = useState(null);

  const handleQuickShop = (card) => {
    setSelectedCard(card);
    setSelectedSize(card.sizes.split(", ")[0] || "");
  };

  const closePopup = () => {
    setSelectedCard(null);
    setSelectedSize("");
  };

  const handleAddToCart = (card) => {
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
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <div className={styles.line}></div>
            <h2>Best Seller</h2>
            <div className={styles.line}></div>
          </div>
          <p>Top sale in this week</p>
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
                    <div className={styles.overlay}></div>
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
                          localStorage.setItem(
                            "viewedItem",
                            JSON.stringify(card)
                          )
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
                <p className={styles.cardPrice}>{card.price}</p>
              </div>
              {popup === index && (
                <div className={styles.popup}>Added to cart!</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
