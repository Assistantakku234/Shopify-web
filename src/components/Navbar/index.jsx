"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Headertop from "@/components/Headertop";
import Cart from "@/components/Cart";
import Sidemenu from "@/components/Sidemenu";
import Searchit from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
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

  const toggleMenuPopup = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Headertop />
      <Header />
      <div className={styles.navbar}>
        <button className={styles.hamburger} onClick={toggleMenuPopup}>
          <RiMenu2Fill />
        </button>
        <Link href="/"
          className={styles.logLink}>
          <Image
            src="/Kalles.webp"
            alt="Women"
            width={95}
            height={29}
          />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Product">Product</Link>
          </li>
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
        <Searchit />
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
                className={`${styles.label} ${isEmailFocused || email ? styles.shrink : ""
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
                className={`${styles.label} ${isPasswordFocused || password ? styles.shrink : ""
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
          <Sidemenu />
        </div>
        <div className={styles.sideCloseContainer}
            onClick={toggleMenuPopup}>
          <IoCloseOutline
            className={styles.menuCloseIcon}
            onClick={toggleMenuPopup}
          />
        </div>
      </div>

      {/* Bottom Menu Popup */}
      <div className={styles.BottomMenuPopup}>
        <Link href="/Product" className={styles.BottomBtn}>
          <span
            className={`${styles.icon} ${styles.iconHover}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "24px",
              height: "24px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </span>
          <p>Shop</p>
        </Link>
        <div className={styles.BottomBtn} onClick={toggleCartPopup}>
          <div className={styles.cartContainer}>
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
          <p>Cart</p>
        </div>
        <div onClick={toggleLoginPopup} className={styles.BottomBtn}>
          <User className={`${styles.icon} ${styles.iconHover}`} />
          <p>Account</p>
        </div>
        <div onClick={toggleSearchPopup} className={styles.BottomBtn}>
          <Search className={`${styles.icon} ${styles.iconHover}`} />
          <p>Search</p>
        </div>
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
