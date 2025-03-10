// components/BlogCard.js
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";

const blogData = [
  {
    image: "/summer.jpg",
    title: "Spring – Summer Trending 2020",
    date: "May 11, 2022",
    description:
      "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
  },
  {
    image: "/Top.jpg",
    title: "Autumn Collection Arrivals",
    date: "October 5, 2022",
    description:
      "Discover the latest trends in autumn fashion. From cozy sweaters to stylish boots, we have everything you need to stay trendy this season.",
  },
  {
    image: "/Season.jpg",
    title: "Winter Wonderland Fashion",
    date: "December 20, 2022",
    description:
      "Stay warm and stylish this winter with our exclusive collection. Featuring premium jackets, scarves, and more!",
  },
];

const BlogCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % blogData.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + blogData.length) % blogData.length);
  };

  if (!isMobile) return null;

  return (
    <div className={styles.blogCard}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.line}></div>
          <h2>LATEST FROM BLOG</h2>
          <div className={styles.line}></div>
        </div>
        <p>The freshest and most exciting news</p>
      </div>
      <div className={styles.hello}>
        <div className={styles.imageContainer}>
          <Image
            src={blogData[currentIndex].image}
            alt="Blog Image"
            width={500}
            height={300}
            className={styles.image}
          />
          <div className={styles.navigation}>
            <span
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={prevImage}
            >
              &#10094;
            </span>
            <span
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextImage}
            >
              &#10095;
            </span>
          </div>
        </div>
        <div className={styles.infomation}>
          <h2 className={styles.informationTitle}>
            {blogData[currentIndex].title}
          </h2>
          <p className={styles.meta}>
            By admin on <strong>{blogData[currentIndex].date}</strong>
          </p>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>
            {blogData[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
