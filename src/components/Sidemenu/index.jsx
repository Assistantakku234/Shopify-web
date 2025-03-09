"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, User } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import styles from "./Sidemenu.module.css";

export default function Sidemenu() {
  const [activeList, setActiveList] = useState("MENU");
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [localCartItems, setLocalCartItems] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang); // Update selected language
    setOpenDropdown(null); // Close dropdown after selection
  };

  useEffect(() => {
    if (cartOpen) {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setLocalCartItems(storedCart);
      setCartCount(parseInt(localStorage.getItem("cartCount") || "0"));
    }
  }, [cartOpen]);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const menuItems = [
    {
      name: "Demo",
      href: "/",
      dropdownLinks: ["/demo-1", "/demo-2", "/demo-3"],
    },
    {
      name: "Shop",
      href: "/shop",
      dropdownLinks: ["/shop-deals", "/new-arrivals", "/best-sellers"],
    },
    {
      name: "Product",
      href: "/Product",
      dropdownLinks: ["/latest-products", "/top-rated", "/on-sale"],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      dropdownLinks: ["/web-design", "/branding", "/case-studies"],
    },
    {
      name: "Lookback",
      href: "/lookback",
      dropdownLinks: ["/yearly-reviews", "/milestones", "/customer-stories"],
    },
    {
      name: "Blog",
      href: "/blog",
      dropdownLinks: ["/tech", "/lifestyle", "/business"],
    },
  ];

  const categories = [
    {
      name: "Accessories",
      href: "/accessories",
      image: "categories/accessories.webp",
    },
    {
      name: "Bag",
      href: "/bag",
      image: "categories/bag.webp",
    },
    {
      name: "Jewellery",
      href: "/jewellery",
      image: "categories/jewellery.webp",
    },
    {
      name: "Glasses",
      href: "/glasses",
      image: "categories/glasses.avif",
    },
    {
      name: "Hats",
      href: "/hats",
      image: "categories/hats.webp",
    },
    {
      name: "Flower",
      href: "/flower",
      image: "categories/flower.webp",
    },
    {
      name: "Furniture",
      href: "/furniture",
      image: "categories/furniture.webp",
    },
    {
      name: "Men",
      href: "/men",
      image: "categories/men.webp",
    },
    {
      name: "Lingeries",
      href: "/lingeries",
      image: "categories/lingeries.webp",
    },
    {
      name: "Organic",
      href: "/organic",
      image: "categories/organic.webp",
    },
    {
      name: "Shoes",
      href: "/shoes",
      image: "categories/shoes.webp",
    },
    {
      name: "Watch",
      href: "/watch",
      image: "categories/watch.webp",
    },
    {
      name: "Women",
      href: "/women",
      image: "categories/women.webp",
    },
  ];

  return (
    <div className={styles.parentContainer}>
      <div className={styles.menuHeader}>
        {["MENU", "CATEGORIES"].map((item) => (
          <button
            key={item}
            className={`${styles.menuSwitch} ${
              activeList === item ? styles.activeButton : ""
            }`}
            onClick={() => setActiveList(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.sidebarContainer}>
        {activeList === "MENU" ? (
          <>
            {menuItems.map((item, index) => (
              <div key={index} className={styles.sideMenuOpts}>
                <Link href={item.href}>{item.name}</Link>
                <button
                  className={`${styles.dropDownBtn} ${
                    openDropdown === index ? styles.active : ""
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  +
                </button>
                {openDropdown === index && (
                  <div className={styles.dropDown}>
                    {item.dropdownLinks.map((link, idx) => (
                      <Link key={idx} href={link}>
                        {link.replace("/", "").replace("-", " ")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className={styles.actionButtons}>
              <div className={styles.contact}>
                <h5>Need Help?</h5>
                <Link href="tel:+0123456789">+01 23456789</Link>
                <Link href="mailto:kalles@domain.com">kalles@domain.com</Link>
              </div>

              <button className={styles.actionBtn}>Buy Theme</button>
              <button className={styles.actionBtn}>
                <Heart size={16} /> Wishlist
              </button>
              <button className={styles.actionBtn}>
                <FiSearch size={16} /> Search
              </button>
              <button className={styles.actionBtn}>
                <User size={16} /> Login / Register
              </button>

              {/* Language Selector */}
              <div className={styles.sideMenuOpts}>
                <Link href="/language">{selectedLanguage}</Link>{" "}
                {/* Display selected language */}
                <button
                  className={`${styles.dropDownBtn} ${
                    openDropdown === "language" ? styles.active : ""
                  }`}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "language" ? null : "language"
                    )
                  }
                >
                  +
                </button>
                {openDropdown === "language" && (
                  <div className={styles.dropDown}>
                    {["English", "Spanish", "French", "German"].map(
                      (lang, idx) => (
                        <button
                          key={idx}
                          className={styles.langSelect}
                          onClick={() => handleLanguageChange(lang)}
                        >
                          {lang}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div>
            {categories.map((item, index) => (
              <Link href={item.href}>
                <div key={index} className={styles.categoryOpts}>
                  <img
                    className={styles.categoryImg}
                    src={item.image}
                    alt={item.name}
                  />

                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
