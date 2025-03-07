"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";


import styles from "./Product.module.css";

const categories = [
  { id: 1, name: "New Arrival", heroImage: "heroImages/Newarrival.jpg" },
  { id: 2, name: "Decor", heroImage: "heroImages/Decor.jpg" },
  { id: 3, name: "Denim", heroImage: "heroImages/Denim.jpg" },
  { id: 4, name: "Dress", heroImage: "heroImages/Dress.jpg" },
  { id: 5, name: "Hats", heroImage: "heroImages/Hats.jpg" },
  { id: 6, name: "Men", heroImage: "heroImages/Men.jpg" },
  { id: 7, name: "Sale", heroImage: "heroImages/Sale.jpg" },
  { id: 8, name: "Shoes", heroImage: "heroImages/Shoes.jpg" },
  { id: 9, name: "Women", heroImage: "heroImages/Women.jpg" },
];

const initialCards = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    image: "/Resin Strap.jpg",
    hoverImage: "/Resin Strap02.jpg",
    sizes: "XS, S, M, L",
    category: "Shoes",
    NewArrival: true,
  },
  {
    title: "Ridley High Waist",
    price: "36.00",
    image: "/Ridley01.jpg",
    hoverImage: "/Ridley02.jpg",
    sizes: "S, M, L",
    category: "Denim",
    NewArrival: true,
  },
  {
    title: "Blush Beanie",
    price: "15.00",
    image: "/Blush Beanie01.jpg",
    hoverImage: "/Blush Beanie02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
    NewArrival: true,
  },
  {
    title: "Cluse La Baheme Rose Gold",
    price: "45.00",
    image: "/Gold01.jpg",
    hoverImage: "/Gold02.jpg",
    sizes: "One Size",
    category: "Women",
    NewArrival: true,
  },
  {
    title: "Mercury Tee",
    price: "68.00",
    image: "/Mercury01.jpg",
    hoverImage: "/Mercury02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Men",
    NewArrival: true,
  },
  {
    title: "La Baheme Rose Gold",
    price: "40.00",
    image: "/RoseGold01.jpg",
    hoverImage: "/RoseGold02.jpg",
    sizes: "XS, S, M, L",
    category: "Sale",
    NewArrival: true,
  },
  {
    title: "Cream women pants",
    price: "35.00",
    image: "/Women Pants01.jpg",
    hoverImage: "/Women Pants02.jpg",
    sizes: "S, M, L, XL, XXL",
    category: "Women",
    NewArrival: true,
  },
  {
    title: "Black mountain hat",
    price: "35.00",
    image: "/hat01.jpg",
    hoverImage: "/hat02.jpg",
    sizes: "XS, S, M, L",
    category: "Hats",
    NewArrival: true,
  },
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedOption, setSelectedOption] = useState("Alphabetically, A-Z");

  const filteredCards = useMemo(() => {
    let filtered = [...initialCards];
    if (selectedCategory && selectedCategory.name === "New Arrival") {
      filtered = filtered.filter((card) => card.NewArrival);
    } else if (selectedCategory && selectedCategory.name !== "All") {
      filtered = filtered.filter(
        (card) => card.category === selectedCategory.name
      );
    }

    switch (selectedOption) {
      case "Alphabetically, A-Z":
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case "Alphabetically, Z-A":
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      case "Price, Low to High":
        return filtered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case "Price, High to Low":
        return filtered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      default:
        return filtered;
    }
  }, [selectedCategory, selectedOption]);

  return (
    <>

      <nav className={styles.navbar}>
        <ul className={styles.menu}>

          {categories.map((category) => (
            <li key={category.id}>
              <Link href="#" legacyBehavior>
                <a
                  className={
                    selectedCategory && selectedCategory.id === category.id
                      ? styles.active
                      : ""
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.wishlistHero}>
        <div className={styles.imageContainer}>
          <img src={selectedCategory.heroImage} alt={selectedCategory.name} />
        </div>
        <div className={styles.overlay}>
          <h3>{selectedCategory.name}</h3>
          <p>{`Home > ${selectedCategory.name}`}</p>
        </div>
      </div>

      <div className={styles.filterContainer}>
        <select
          className={styles.sortDropdown}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
          <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
          <option value="Price, Low to High">Price, Low to High</option>
          <option value="Price, High to Low">Price, High to Low</option>
        </select>
      </div>

      <div className={styles.cardsContainer}>
        {filteredCards.map((card, index) => (
          <div key={index} className={styles.imgCard}>
            <div className={styles.imageWrapper}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.imageDefault}
              />
              <img
                src={card.hoverImage}
                alt={`${card.title} hover`}
                className={styles.imageHover}
              />
              <div className={styles.cardOverlay}>
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
                    <Link href="/Check">
                      <button
                        className={styles.addToCartBtn}
                        onClick={() => {
                          const cartItem = {
                            title: card.title,
                            price: card.price,
                            image: card.image,
                          };
                          // take the old cart or create an empty array
                          const existingCart =
                            JSON.parse(localStorage.getItem("cart")) || [];
                          // add new item
                          existingCart.push(cartItem);
                          // save in local storage
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(existingCart)
                          );
                          alert("Item added to cart!");
                        }}
                      >
                        Add to Cart
                      </button>
                    </Link>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
