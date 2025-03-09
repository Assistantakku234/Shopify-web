"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import styles from "./Footermenu.module.css";

export default function Footermenu() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.ftMenuContainer}>
      {/* Get In Touch */}
      <div className={styles.sideMenuOpts}>
        <h3>Get in touch</h3>
        <button
          className={`${styles.dropDownBtn} ${
            openDropdown === "services" ? styles.active : ""
          }`}
          onClick={() => toggleDropdown("services")}
        >
          +
        </button>
        {openDropdown === "services" && (
          <div className={styles.footerTop}>
            <div className={styles.footerTopContainer}>
              <div className={`${styles.footerSection} ${styles.sectionBig}`}>
                <div className={styles.footerLogo}>
                  <Image
                    src="/Kalles.webp"
                    alt="Company's logo"
                    width={95}
                    height={28.5}
                  />
                </div>
                <p>184 Main Rd E, St Albans VIC 3021, Australia</p>
                <p>contact@company.com</p>
                <p>+001 2233 456</p>
                <div className={styles.iconContainer}>
                  <div className={styles.SocialIcons}>
                    <FaFacebookF className={styles.facebook} />
                  </div>
                  <div className={styles.SocialIcons}>
                    <FaTwitter className={styles.twitter} />
                  </div>
                  <div className={styles.SocialIcons}>
                    <FaInstagram className={styles.instagram} />
                  </div>
                  <div className={styles.SocialIcons}>
                    <FaLinkedinIn className={styles.linkedin} />
                  </div>
                  <div className={styles.SocialIcons}>
                    <FaPinterestP className={styles.pinterest} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Categories */}
      <div className={styles.sideMenuOpts}>
        <h3>Categories</h3>
        <button
          className={`${styles.dropDownBtn} ${
            openDropdown === "categories" ? styles.active : ""
          }`}
          onClick={() => toggleDropdown("categories")}
        >
          +
        </button>
        {openDropdown === "categories" && (
          <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Watch</li>
              <li>Dress</li>
            </ul>
          </div>
        )}
      </div>
      {/* Information */}
      <div className={styles.sideMenuOpts}>
        <h3>Information</h3>
        <button
          className={`${styles.dropDownBtn} ${
            openDropdown === "information" ? styles.active : ""
          }`}
          onClick={() => toggleDropdown("information")}
        >
          +
        </button>
        {openDropdown === "information" && (
          <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Returns & Exchanges</li>
              <li>Shipping & Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        )}
      </div>
      {/* Useful links */}
      <div className={styles.sideMenuOpts}>
        <h3>Useful links</h3>
        <button
          className={`${styles.dropDownBtn} ${
            openDropdown === "useful-links" ? styles.active : ""
          }`}
          onClick={() => toggleDropdown("useful-links")}
        >
          +
        </button>
        {openDropdown === "useful-links" && (
          <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
            <ul>
              <li>Latest News</li>
              <li>My Account</li>
              <li>Size Guide</li>
              <li>FAQs</li>
              <li>FAQs 2</li>
            </ul>
          </div>
        )}
      </div>
      {/* NewsLetter Signup */}
      <div className={styles.sideMenuOpts}>
        <h3>NewsLetter Signup</h3>
        <button
          className={`${styles.dropDownBtn} ${
            openDropdown === "newsletter" ? styles.active : ""
          }`}
          onClick={() => toggleDropdown("newsletter")}
        >
          +
        </button>
        {openDropdown === "newsletter" && (
          <div className={`${styles.footerSection} ${styles.sectionBig}`}>
            <p>
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className={styles.inputContainer}>
              <input
                type="email"
                className={styles.emailInput}
                placeholder="Your email address"
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
            <Image
              src="/Payment-methods.png"
              alt="payment methods"
              width={265}
              height={21}
              className={styles.logoImg}
            />
          </div>
        )}
      </div>
      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>
          All Rights Reserved © 2025 <a color="rgb(86, 207, 225)">Kalles</a> -
          Developed by The4
        </p>
        <div className={styles.footerLinks}>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>
  );
}
