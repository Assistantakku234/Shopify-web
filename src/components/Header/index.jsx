"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "jp", name: "日本語" },
];


const Header = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);



  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "en",
    name: "English",
  });


  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
    setIsCurrencyDropdownOpen(false);
  };


  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={styles.headerTopbar}>
      <div className={styles.contactInfo}>
        <FaPhone className={styles.contactIcon} />{" "}
        <span className={styles.contact}>+01 23456789</span>
        <FaEnvelope className={styles.mailIcon} />{" "}
        <span className={styles.email}>Kalles@domain.com</span>
      </div>
      <div className={styles.promoBanner}>
        <p className={styles.promo}>Summer sale discount off <span className={styles.discount}> 50% </span></p>
        <a href="#" className={styles.shopNowButton}>
          Shop Now!
        </a>
      </div>
      <div className={styles.headerActions}>
        <FaMapMarkerAlt className={styles.locationIcon} />{" "}
        <span className={styles.locationLink}>
          <Link href="/Location">Location</Link>
        </span>
        {/* Language Selector */}
        <span className={styles.languageDropdown} onClick={toggleLanguageDropdown}>
          {selectedLanguage.name} &#9662;
        </span>
        {isLanguageDropdownOpen && (
          <ul className={styles.dropdownMenu}>
            {languages.map((language) => (
              <li
                key={language.code}
                className={styles.dropdownItem}
                onClick={() => selectLanguage(language)}
              >
                {language.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
