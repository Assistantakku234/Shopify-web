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
    <div className={styles.topBar}>
      <div className={styles.left}>
        <FaPhone className={styles.contacticon} />{" "}
        <span className={styles.contact}>+01 23456789</span>
        <FaEnvelope className={styles.mailicon} />{" "}
        <span className={styles.mail}>Kalles@domain.com</span>
      </div>
      <div className={styles.center}>
        Summer sale discount off <span className={styles.highlight}> 50% </span>
        <a href="#" className={styles.shopNow}>
          Shop Now!
        </a>
      </div>
      <div className={styles.right}>
        <FaMapMarkerAlt className={styles.icon} />{" "}
        <span className={styles.location}>
        <Link href="/Location">Location</Link>
          </span>
        {/* Language Selector */}
        <span className={styles.language} onClick={toggleLanguageDropdown}>
          {selectedLanguage.name} &#9662;
        </span>
        {isLanguageDropdownOpen && (
          <ul className={styles.dropdownList}>
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
