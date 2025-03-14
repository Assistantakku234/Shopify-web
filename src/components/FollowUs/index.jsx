"use client";
import { useRef } from "react";
import styles from "./Follow.module.css";

const FollowUs = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/summer.jpg",
      title: "Spring – Summer Trending 2020",
    },
    {
      id: 2,
      image: "/Top.jpg",
      title: "The Easiest Way to Break Out on Top",
    },
    {
      id: 3,
      image: "/Season.jpg",
      title: "Style for couple in Wedding season",
    },
    {
      id: 4,
      image: "/summer.jpg",
      title: "Spring – Summer Trending 2020",
    },
    {
      id: 5,
      image: "/Top.jpg",
      title: "The Easiest Way to Break Out on Top",
    },
    {
      id: 6,
      image: "/Season.jpg",
      title: "Style for couple in Wedding season",
    },
    {
      id: 7,
      image: "/summer.jpg",
      title: "Spring – Summer Trending 2020",
    },
    {
      id: 8,
      image: "/Top.jpg",
      title: "The Easiest Way to Break Out on Top",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 260; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 260;
    }
  };

  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.titleContainer}>
        <div className={styles.line}></div>
        <h2>@ FOLLOW US ON INSTAGRAM</h2>
        <div className={styles.line}></div>
      </div>

      {/* Image cards */}
      <div className={styles.scrollWrapper}>
        <button className={styles.scrollButton} onClick={scrollLeft}>
          &lt;
        </button>
        <div ref={scrollContainerRef} className={styles.blogContainer}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <div className={styles.imageContainer}>
                <img src={post.image} alt={post.title} />
              </div>
            </div>
          ))}
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>
          &gt;
        </button>
      </div>

      {/* Text Area */}
      <div className={styles.connect}>
        <div className={styles.textCard}>
          <svg viewBox="0 0 29 32" width="29" height="32">
            <path d="M 5.867 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 s 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 5.867 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path>
            <path d="M 22.933 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 c 1.173 0 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 22.933 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path>
            <path d="M 25.12 11.2 l -0.907 -4.267 c -0.373 -1.387 -1.44 -2.133 -2.88 -2.133 h -13.867 c -1.493 0 -2.347 0.747 -2.773 2.133 l -0.96 4.267 h -3.733 v 1.067 h 3.467 v 0.053 c -1.653 0.107 -2.933 1.493 -2.933 3.2 v 7.413 h 1.6 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 13.867 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 1.6 v -7.413 c 0 -1.653 -1.28 -3.04 -2.88 -3.2 v -0.053 h 3.413 v -1.067 h -3.68 Z M 5.707 7.253 c 0.32 -0.96 0.8 -1.387 1.76 -1.387 h 13.867 c 1.013 0 1.6 0.427 1.867 1.333 l 1.067 5.12 h -19.733 l 1.173 -5.067 Z M 6.4 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 25.6 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 27.2 15.52 v 6.347 h -25.6 v -6.347 c 0 -1.173 0.96 -2.133 2.133 -2.133 h 21.333 c 1.173 0 2.133 0.96 2.133 2.133 Z"></path>
          </svg>
          <div className={styles.textArea}>
            <h3>FREE SHIPPING</h3>
            <p>Free shipping on all US order or order above $100</p>
          </div>
        </div>
        <div className={styles.textCard}>
          <svg

            viewBox="0 0 32 32"
            width="32"
            height="32"
          >
            <path d="M 16 3.205 c -7.066 0 -12.795 5.728 -12.795 12.795 s 5.729 12.794 12.795 12.795 c 7.067 -0.001 12.795 -5.729 12.795 -12.795 s -5.729 -12.795 -12.795 -12.795 Z M 15.999 21.864 c -3.233 0 -5.863 -2.631 -5.863 -5.864 s 2.631 -5.864 5.864 -5.864 h 0.001 c 3.233 0 5.863 2.631 5.863 5.864 s -2.631 5.864 -5.865 5.864 Z M 22.395 13.327 l 4.028 -2.693 c 0.832 1.609 1.305 3.433 1.305 5.366 c 0 1.909 -0.461 3.71 -1.273 5.305 l -4.035 -2.699 c 0.327 -0.805 0.511 -1.683 0.511 -2.606 c 0 -0.948 -0.191 -1.85 -0.535 -2.673 Z M 25.89 9.708 l -3.99 2.668 c -0.58 -0.942 -1.377 -1.733 -2.325 -2.305 l 2.669 -3.991 c 1.466 0.926 2.712 2.167 3.645 3.629 Z M 21.316 5.55 l -2.698 4.034 c -0.808 -0.33 -1.69 -0.515 -2.617 -0.515 h -0.001 c -0.927 0 -1.809 0.185 -2.617 0.515 l -2.698 -4.034 c 1.597 -0.816 3.402 -1.279 5.315 -1.279 s 3.719 0.463 5.316 1.279 Z M 9.756 6.078 l 2.67 3.992 c -0.95 0.574 -1.748 1.367 -2.329 2.311 l -3.991 -2.669 c 0.934 -1.464 2.182 -2.707 3.65 -3.634 Z M 5.574 10.639 l 4.029 2.694 c -0.343 0.822 -0.533 1.722 -0.533 2.667 c 0 0.92 0.183 1.797 0.509 2.599 l -4.036 2.7 c -0.81 -1.593 -1.27 -3.393 -1.27 -5.299 c 0 -1.931 0.472 -3.753 1.303 -5.361 Z M 6.069 22.229 l 3.992 -2.669 c 0.576 0.959 1.377 1.766 2.331 2.35 l -2.669 3.99 c -1.473 -0.937 -2.724 -2.193 -3.654 -3.671 Z M 10.65 26.432 l 2.695 -4.03 c 0.818 0.34 1.713 0.529 2.654 0.529 c 0.001 0 0.001 0 0.001 0 c 0.941 0 1.838 -0.189 2.656 -0.529 l 2.695 4.03 c -1.606 0.827 -3.424 1.297 -5.351 1.297 s -3.745 -0.47 -5.35 -1.297 Z M 22.278 25.899 l -2.669 -3.991 c 0.952 -0.583 1.751 -1.387 2.327 -2.344 l 3.992 2.67 c -0.93 1.475 -2.179 2.729 -3.65 3.665 Z"></path>
          </svg>
          <div className={styles.textArea}>
            <h3>SUPPORT 24/7</h3>
            <p>Contact us 24 hours a day, 7 Days a week </p>
          </div>
        </div>
        <div className={styles.textCard}>
          <svg
            viewBox="0 0 32 32"
            width="32"
            height="32"
          >
            <path d="M 27.729 18.664 c 0 6.467 -5.261 11.729 -11.729 11.729 s -11.729 -5.261 -11.729 -11.729 c 0 -6.452 5.237 -11.703 11.684 -11.728 v 5.333 l 10.129 -5.865 l -10.129 -5.864 v 5.33 c -7.047 0.024 -12.751 5.741 -12.751 12.794 c 0 7.065 5.727 12.795 12.795 12.795 c 7.066 0 12.795 -5.73 12.795 -12.795 h -1.066 Z M 17.022 2.39 l 6.935 4.015 l -6.935 4.016 v -8.03 Z"></path>
          </svg>
          <div className={styles.textArea}>
            <h3>30 DAYS RETURN</h3>
            <p>Simply return it within 30 days for an exchange</p>
          </div>
        </div>
        <div className={styles.textCard}>
          <svg
            viewBox="0 0 27 32"
            width="27"
            height="32"
          >
            <path d="M 13.333 2.667 c -7.36 0 -13.333 5.973 -13.333 13.333 s 5.973 13.333 13.333 13.333 c 7.36 0 13.333 -5.973 13.333 -13.333 s -5.973 -13.333 -13.333 -13.333 Z M 13.333 28.267 c -6.773 0 -12.267 -5.493 -12.267 -12.267 s 5.493 -12.267 12.267 -12.267 c 6.773 0 12.267 5.493 12.267 12.267 s -5.493 12.267 -12.267 12.267 Z"></path>
            <path d="M 17.6 12.8 c 0 -2.347 -1.92 -4.267 -4.267 -4.267 s -4.267 1.92 -4.267 4.267 c 0 1.6 0.907 3.04 2.24 3.733 l -2.24 6.4 h 8.533 l -2.187 -6.4 c 1.28 -0.747 2.187 -2.133 2.187 -3.733 Z M 16.107 21.867 h -5.547 l 1.707 -4.96 l 0.32 -0.853 l -0.8 -0.427 c -1.013 -0.587 -1.653 -1.653 -1.653 -2.827 c 0 -1.76 1.44 -3.2 3.2 -3.2 s 3.2 1.44 3.2 3.2 c 0 1.173 -0.64 2.24 -1.653 2.773 l -0.8 0.427 l 0.267 0.853 l 1.76 5.013 Z"></path>
          </svg>
          <div className={styles.textArea}>
            <h3>100% PAYMENT SECURE</h3>
            <p>We ensure secure paymants with PV</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FollowUs;
