"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./MobileViewItem.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LiaStarHalf } from "react-icons/lia";

const MobileViewItem = ({ itemData }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [mainImage, setMainImage] = useState("");
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const images = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    if (itemData) {
      setMainImage(itemData.hoverImage);
      images.current = [itemData.image, itemData.hoverImage, itemData.image];
    }
  }, [itemData]);

  if (!itemData) return <div>Loading...</div>;

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleOpenImage = () => {
    setIsImageOpen(true);
    setZoomLevel(1);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  const handleZoom = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      imageRef.current.style.transformOrigin = `${x}px ${y}px`;
      setZoomLevel((prevZoom) => Math.min(3, Math.max(1, prevZoom + e.deltaY * -0.01)));
    }
  };

  function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className={styles.star}>
          <IoIosStar />
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.halfStar}>
          <LiaStarHalf />
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.noStar}>
          <IoIosStarOutline />
        </span>
      );
    }

    return <div>{stars}</div>;
  }

  return (
    <div className={styles.mobileView}>
      <div className={styles.imageContainer}>
        <img
          src={mainImage}
          alt={itemData.title}
          className={styles.mainImage}
          onClick={handleOpenImage}
        />
        <div className={styles.thumbnailContainer}>
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

      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{itemData.title}</h1>
        <div className={styles.productPrice}>{`$${itemData.price}`}</div>
        <div className={styles.productRating}>
          <StarRating rating={parseFloat(itemData.rating)} />
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
              }}
            >
              Add to Cart
            </button>
          </Link>
        </div>
        <div className={styles.details}>
              <p className={styles.detailsTitle}>Availability: <span className={styles.detailsInfo}>In Stock</span></p>
              <p className={styles.detailsTitle}>Categories:<span className={styles.detailsFashininfo}> Fashion</span></p>
              <p className={styles.detailsTitle}>Tags:
                <span className={styles.detailsInfo}>
                  <span className={styles.detailprice}>Price $50-$150</span>,
                  <span className={styles.detailsVendor}>Vendor Kalles</span>,
                  <span className={styles.category}>Women</span>
                </span>
              </p>
            </div>
        <div className={styles.socialIcons}>
          <div className={styles.iconWrapper}>
            <FaFacebookF size={20} className={styles.icon} />
            <span className={styles.tooltip}>Share on Facebook</span>
          </div>
          <div className={styles.iconWrapper}>
            <FaXTwitter size={20} className={styles.icon} />
            <span className={styles.tooltip}>Share on Twitter</span>
          </div>
          <div className={styles.iconWrapper}>
            <FaPinterestP size={20} className={styles.icon} />
            <span className={styles.tooltip}>Pin on Pinterest</span>
          </div>
          <div className={styles.iconWrapper}>
            <BsTelegram size={20} className={styles.icon} />
            <span className={styles.tooltip}>Share on Telegram</span>
          </div>
          <div className={styles.iconWrapper}>
            <MdEmail size={20} className={styles.icon} />
            <span className={styles.tooltip}>Send via Email</span>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div className={styles.fullScreenImage} onClick={handleCloseImage}>
          <img
            ref={imageRef}
            src={mainImage}
            alt={itemData.title}
            className={styles.zoomedImage}
            style={{ transform: `scale(${zoomLevel})` }}
            onWheel={handleZoom}
          />
        </div>
      )}
    </div>
  );
};

export default MobileViewItem;