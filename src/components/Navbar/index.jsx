"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Cart from "@/components/Cart";
import Sidemenu from "@/components/Sidemenu";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = ({ cartItems }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeList, setActiveList] = useState("MENU");
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [localCartItems, setLocalCartItems] = useState([]);

  // Fetch cart data from localStorage when cartOpen changes
  useEffect(() => {
    if (cartOpen) {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setLocalCartItems(storedCart);
      const storedCartCount = localStorage.getItem("cartCount");
      if (storedCartCount) {
        setCartCount(parseInt(storedCartCount));
      }
    }
  }, [cartOpen]);

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

  const toggleSearchPopup = () => {
    setShowSearch(!showSearch);
  };

  const toggleLoginPopup = () => {
    setShowLogin(!showLogin);
  };

  const toggleCartPopup = () => {
    setCartOpen(!cartOpen);
  };

  const handleUserClick = () => {
    setShowLogin(true);
  };

  const handleSuggestionClick = (value) => {
    setSearchValue(value);
    setShowSearch(false);
  };

  const toggleMenuPopup = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Headertop />
      <div className={styles.navbar}>
        <button className={styles.hamburger} onClick={toggleMenuPopup}>
          <RiMenu2Fill />
        </button>
        <Image
          src="/Kalles.webp"
          alt="Women"
          width={95}
          height={29}
          className={styles.logoImg}
        />
        <ul className={styles.menu}>
          <li>
            <Link href="/">Demo</Link>
          </li>
          {/* <li>
            <Link href="/">
              Shop <span className={styles.newBadge}>New</span>
            </Link>
          </li> */}
          <li>
            <Link href="/Product">Product</Link>
          </li>
          {/* <li>
            <Link href="/Check">
              Sale <span className={styles.saleBadge}>Sale</span>
            </Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Lookbook</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Buy Theme</Link>
          </li> */}
        </ul>
        <div className={styles.icons}>
          <div onClick={toggleSearchPopup}>
            <Search className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div onClick={toggleLoginPopup}>
            <User
              className={`${styles.icon} ${styles.iconHover} ${styles.iconHide} `}
            />
          </div>
          {/* <div className={styles.heartContainer}>
            <Link href="/User">
              <div className={styles.heartContainer}>
                <Heart className={`${styles.icon} ${styles.iconHover}`} />
                <span className={styles.heartBadge}>0</span>
              </div>
            </Link>
          </div> */}
          <div className={styles.cartContainer} onClick={toggleCartPopup}>
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div className={`${styles.cartPopup} ${showSearch ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span className={styles.theTitle}>Search our site</span>
          <X className={styles.closeIcon} onClick={toggleSearchPopup} />
        </div>
        <hr className={styles.SearchDivider} />
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
            <Link href="/products">View All →</Link>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      <div className={`${styles.cartPopup} ${showLogin ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span className={styles.theTitle}>Login</span>
          <X className={styles.closeIcon} onClick={toggleLoginPopup} />
        </div>

        <div className={styles.loginForm}>
          <div className={styles.sidebarContainer}>
            {/* Email Input */}
            <div className={styles.inputContainer}>
              <label
                className={`${styles.label} ${
                  isEmailFocused || email ? styles.shrink : ""
                }`}
              >
                E-mail <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="email"
                className={styles.input}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(email !== "")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className={styles.inputContainer}>
              <label
                className={`${styles.label} ${
                  isPasswordFocused || password ? styles.shrink : ""
                }`}
              >
                Password <span className={styles.mandatory}>*</span>
              </label>
              <input
                type="password"
                className={styles.input}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(password !== "")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot your password?
            </a>
            <div className={styles.signIn}>
              <button className={styles.signInButton}>Sign In</button>
              <a className={styles.customer}>
                New customer? Create your account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Popup */}
      <div className={`${styles.cartPopup} ${cartOpen ? styles.open : ""}`}>
        <div className={styles.theHeader}>
          <span>SHOPPING CART</span>
          <X className={styles.closeIcon} onClick={toggleCartPopup} />
        </div>
        <div>
          {localCartItems && localCartItems.length > 0 && (
            <div>
              <h3>Cart Items:</h3>
              <ul>
                {localCartItems.map((item, index) => (
                  <li key={index}>
                    {item.title} - {item.selectedSize}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Cart cartItems={localCartItems} />
      </div>

      {/* Menu Popup */}
      <div className={`${styles.menuPopup} ${showMenu ? styles.open : ""}`}>
        <div className={styles.menuContainer}>
          <Sidemenu/>
        </div>
        <IoCloseOutline
          className={styles.menuCloseIcon}
          onClick={toggleMenuPopup}
        />
      </div>

      {/* Overlay for Closing Popups */}
      {(showSearch || showLogin || cartOpen || showMenu) && (
        <div
          className={styles.overlay}
          onClick={() => {
            setShowSearch(false);
            setShowLogin(false);
            setShowMenu(false);
            setCartOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
