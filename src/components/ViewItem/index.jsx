"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ProductTabs from "@/components/ProductInformation";
import styles from "./ViewItem.module.css";
import { CiFacebook, CiMail } from "react-icons/ci";
import { FaXTwitter, FaPinterestP, FaTumblr } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LiaStarHalf } from "react-icons/lia";





const ViewItemPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [itemData, setItemData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [rating, setRating] = useState(null);
  const mainImageRef = useRef(null);
  const images = useRef([]);

  useEffect(() => {
    try {
      const storedItem = localStorage.getItem("viewedItem");
      if (storedItem) {
        const parsedItem = JSON.parse(storedItem);
        setItemData(parsedItem);
        setMainImage(parsedItem.hoverImage);
        images.current = [
          parsedItem.image,
          parsedItem.hoverImage,
          parsedItem.image,
        ];
        setRating(parsedItem.rating);
      } else {
        console.error("No item data found in local storage.");
      }
    } catch (error) {
      console.error("Error parsing item data:", error);
    }
  }, []);

  if (!itemData) return <div>Loading...</div>;

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleMouseMove = (e) => {
    if (isZoomed && mainImageRef.current) {
      const rect = mainImageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxX = rect.width - 300;
      const maxY = rect.height - 300;

      setZoomPosition({
        x: Math.max(0, Math.min(maxX, x - 150)),
        y: Math.max(0, Math.min(maxY, y - 150)),
      });
    }
  };

  function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className={styles.star}><IoIosStar />
</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.halfStar}><LiaStarHalf />
</span>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.star}><IoIosStarOutline />
</span>);
    }
  
    return <div>{stars}</div>;
  }

  const handlePrevImage = () => {
    const currentIndex = images.current.indexOf(mainImage);
    const prevIndex =
      (currentIndex - 1 + images.current.length) % images.current.length;
    setMainImage(images.current[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.current.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % images.current.length;
    setMainImage(images.current[nextIndex]);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productPage}>
        <div className={styles.breadcrumb}>Home &gt; {itemData.title}</div>
        <div className={styles.productContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.imageGallery}>
              <div className={styles.thumbnail}>
                {images.current.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleImageClick(img)}
                    className={
                      mainImage === img
                        ? styles.activeThumbnail
                        : styles.inactiveThumbnail
                    }
                  />
                ))}
              </div>
            </div>

            <div
              className={styles.mainImageContainer}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <button
                className={styles.imageSwitchButtonLeft}
                onClick={handlePrevImage}
              >
                &lt;
              </button>
              <img
                ref={mainImageRef}
                src={mainImage}
                alt={itemData.title}
                className={styles.mainImage}
              />
              <button
                className={styles.imageSwitchButtonRight}
                onClick={handleNextImage}
              >
                &gt;
              </button>

              {isZoomed && (
                <>
                  <div
                    className={styles.zoomHighlightBox}
                    style={{
                      left: `${zoomPosition.x}px`,
                      top: `${zoomPosition.y}px`,
                    }}
                  ></div>
                  <div
                    className={styles.zoomPopup}
                    style={{
                      backgroundImage: `url('${mainImage}')`,
                      backgroundSize: "200%",
                      backgroundPosition: `${-(zoomPosition.x * 2)}px ${-(
                        zoomPosition.y * 2
                      )}px`,
                    }}
                  ></div>
                </>
              )}
            </div>
          </div>

          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{itemData.title}</h1>
            <div className={styles.productPrice}>{`$${itemData.price}`}</div>
            <div className={styles.productRating}>
              <StarRating rating={parseFloat(itemData.rating)} />{" "}
              {/* Parse rating as float */}
              <span className={styles.reviewText}>(4 reviews)</span>
              <p>{`${itemData.rating} stars`}</p>
            </div>
            <p className={styles.productDescription}>{itemData.description}</p>

            <div>
              <strong>SIZE: {selectedSize}</strong>
              <div className={styles.productsizes}>
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${
                      selectedSize === size ? styles.activeSize : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className={styles.actions}>
              <div className={styles.quantityContainer}>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className={styles.count}>{quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <Link href="/Check">
                <button
                  className={styles.addToCart}
                  onClick={() => {
                    const cartItem = {
                      title: itemData.title,
                      price: itemData.price,
                      image: itemData.image,
                      quantity,
                    };
                    const existingCart =
                      JSON.parse(localStorage.getItem("cart")) || [];
                    existingCart.push(cartItem);
                    localStorage.setItem("cart", JSON.stringify(existingCart));
                    alert("Item added to cart!");
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductTabs />
    </div>
  );
};

export default ViewItemPage;
