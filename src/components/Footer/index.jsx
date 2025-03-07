"use client";
import styles from "./Footer.module.css";
import Image from "next/image";
import Footermenu from "@/components/Footermenu";
import Btt from "@/components/Btt";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Btt/>
      <Footermenu className={styles.shortFooter} />
      <div className={styles.footerContainer}>
        {/* Top Section */}
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
              <p>
                <svg
                  style={{
                    width: 30,
                    height: 30,
                    verticalAlign: "middle",
                    marginRight: 5,
                  }}
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                >
                  <path
                    fill="currentColor"
                    d="M 16.001 1.072 c 5.291 0 9.596 4.305 9.596 9.597 c 0 1.683 -0.446 3.341 -1.29 4.799 l -8.307 14.394 l -8.308 -14.395 c -0.843 -1.456 -1.289 -3.115 -1.289 -4.798 c 0 -5.292 4.305 -9.597 9.597 -9.597 Z M 16.001 14.4 c 2.058 0 3.731 -1.674 3.731 -3.731 s -1.674 -3.731 -3.731 -3.731 c -2.058 0 -3.732 1.674 -3.732 3.731 s 1.674 3.731 3.732 3.731 Z M 16.001 0.006 c -5.889 0 -10.663 4.775 -10.663 10.663 c 0 1.945 0.523 3.762 1.432 5.332 l 9.23 15.994 l 9.23 -15.994 c 0.909 -1.57 1.432 -3.387 1.432 -5.332 c 0 -5.888 -4.774 -10.663 -10.662 -10.663 v 0 Z M 16.001 13.334 c -1.472 0 -2.666 -1.193 -2.666 -2.665 c 0 -1.471 1.194 -2.665 2.666 -2.665 s 2.665 1.194 2.665 2.665 c 0 1.472 -1.193 2.665 -2.665 2.665 v 0 Z"
                  ></path>
                </svg>
                184 Main Rd E, St Albans VIC 3021, Australia
              </p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <svg
                  style={{
                    width: 30,
                    height: 30,
                    verticalAlign: "middle",
                    marginRight: 5,
                  }}
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                >
                  <path
                    fill="currentColor"
                    d="M 28.244 7.47 h -25.572 v 17.06 h 26.656 v -17.06 h -1.084 Z M 27.177 8.536 l -10.298 10.298 c -0.47 0.47 -1.289 0.47 -1.759 0 l -10.3 -10.298 h 22.356 Z M 3.738 8.961 l 6.923 6.922 l -6.923 6.923 v -13.846 Z M 4.589 23.464 l 6.827 -6.826 l 2.951 2.95 c 0.436 0.436 1.016 0.677 1.633 0.677 s 1.197 -0.241 1.633 -0.677 l 2.951 -2.951 l 6.826 6.826 h -22.822 Z M 28.262 22.807 l -6.923 -6.924 l 6.923 -6.924 v 13.848 Z"
                  ></path>
                </svg>
                contact@company.com
              </p>
              <p>
                <svg
                  style={{
                    width: 30,
                    height: 30,
                    verticalAlign: "middle",
                    marginRight: 5,
                  }}
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                >
                  <path
                    fill="currentColor"
                    d="M 23.407 30.394 c -2.431 0 -8.341 -3.109 -13.303 -9.783 c -4.641 -6.242 -6.898 -10.751 -6.898 -13.785 c 0 -2.389 1.65 -3.529 2.536 -4.142 l 0.219 -0.153 c 0.979 -0.7 2.502 -0.927 3.086 -0.927 c 1.024 0 1.455 0.599 1.716 1.121 c 0.222 0.442 2.061 4.39 2.247 4.881 c 0.286 0.755 0.192 1.855 -0.692 2.488 l -0.155 0.108 c -0.439 0.304 -1.255 0.869 -1.368 1.557 c -0.055 0.334 0.057 0.684 0.342 1.068 c 1.423 1.918 5.968 7.55 6.787 8.314 c 0.642 0.6 1.455 0.685 2.009 0.218 c 0.573 -0.483 0.828 -0.768 0.83 -0.772 l 0.059 -0.057 c 0.048 -0.041 0.496 -0.396 1.228 -0.396 c 0.528 0 1.065 0.182 1.596 0.541 c 1.378 0.931 4.487 3.011 4.487 3.011 l 0.05 0.038 c 0.398 0.341 0.973 1.323 0.302 2.601 c -0.695 1.327 -2.85 4.066 -5.079 4.066 Z M 9.046 2.672 c -0.505 0 -1.746 0.213 -2.466 0.728 l -0.232 0.162 c -0.827 0.572 -2.076 1.435 -2.076 3.265 c 0 2.797 2.188 7.098 6.687 13.149 c 4.914 6.609 10.532 9.353 12.447 9.353 c 1.629 0 3.497 -2.276 4.135 -3.494 c 0.392 -0.748 0.071 -1.17 -0.04 -1.284 c -0.36 -0.241 -3.164 -2.117 -4.453 -2.988 c -0.351 -0.238 -0.688 -0.358 -0.999 -0.358 c -0.283 0 -0.469 0.1 -0.532 0.14 c -0.104 0.111 -0.39 0.405 -0.899 0.833 c -0.951 0.801 -2.398 0.704 -3.424 -0.254 c -0.923 -0.862 -5.585 -6.666 -6.916 -8.459 c -0.46 -0.62 -0.641 -1.252 -0.538 -1.877 c 0.187 -1.133 1.245 -1.866 1.813 -2.26 l 0.142 -0.099 c 0.508 -0.363 0.4 -1.02 0.316 -1.242 c -0.157 -0.414 -1.973 -4.322 -2.203 -4.781 c -0.188 -0.376 -0.336 -0.533 -0.764 -0.533 Z"
                  ></path>
                </svg>
                +001 2233 456
              </p>
              <div className={styles.iconContainer}>
                <div className={styles.SocialIcons}>
                  <span className={styles.tooltip}>Follow on Facebook</span>
                  <FaFacebookF className={styles.facebook} />
                </div>
                <div className={styles.SocialIcons}>
                  <span className={styles.tooltip}>Follow on Twitter</span>
                  <FaTwitter className={styles.twitter} />
                </div>
                <div className={styles.SocialIcons}>
                  <span className={styles.tooltip}>Follow on Instagram</span>
                  <FaInstagram className={styles.instagram} />
                </div>
                <div className={styles.SocialIcons}>
                  <span className={styles.tooltip}>Connect on LinkedIn</span>
                  <FaLinkedinIn className={styles.linkedin} />
                </div>
                <div className={styles.SocialIcons}>
                  <span className={styles.tooltip}>Follow on Pinterest</span>
                  <FaPinterestP className={styles.pinterest} />
                </div>
              </div>
            </div>

            <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
              <div className={styles.sectionHeader}>
                <h4>Categories</h4>
              </div>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Accessories</li>
                <li>Shoes</li>
                <li>Watch</li>
                <li>Dress</li>
              </ul>
            </div>

            <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
              <div className={styles.sectionHeader}>
                <h4>Information</h4>
              </div>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Returns & Exchanges</li>
                <li>Shipping & Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className={`${styles.footerSection} ${styles.sectionSmall}`}>
              <div className={styles.sectionHeader}>
                <h4>Useful Links</h4>
              </div>
              <ul>
                <li>Latest News</li>
                <li>My Account</li>
                <li>Size Guide</li>
                <li>FAQs</li>
                <li>FAQs 2</li>
              </ul>
            </div>

            <div className={`${styles.footerSection} ${styles.sectionBig}`}>
              <div className={styles.sectionHeader}>
                <h4>Newsletter Signup</h4>
              </div>
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <p>All Rights Reserved © 2025 <a color="rgb(86, 207, 225)">Kalles</a> - Developed by The4</p>
          <div className={styles.footerLinks}>
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
