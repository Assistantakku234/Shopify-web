"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ProductTabs from "@/components/ProductInformation";
import styles from "./ViewItem.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { LiaStarHalf } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { TbArrowsCross } from "react-icons/tb";

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
      const maxX = rect.width - 200;
      const maxY = rect.height - 200;

      setZoomPosition({
        x: Math.max(0, Math.min(maxX, x - 100)),
        y: Math.max(0, Math.min(maxY, y - 100)),
      });
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
          <div className={styles.smallHeader}>
            <h1 className={styles.productTitle}>{itemData.title}</h1>
            <div className={styles.productPrice}>{`$${itemData.price}`}</div>
          </div>
          <div className={styles.imagesContainer}>
            {/* Thumbnail */}
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
            {/* Main Image */}
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
              {itemData.tag && (
                <div className={styles.tagsContainer}>
                  {Array.isArray(itemData.tag) ? (
                    itemData.tag.map((tag, index) => (
                      <span
                        key={index}
                        className={styles.tag}
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.name}
                      </span>
                    ))
                  ) : (
                    <span
                      className={styles.tag}
                      style={{ backgroundColor: itemData.tag.color }}
                    >
                      {itemData.tag.name}
                    </span>
                  )}
                </div>
              )}
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
                  }}
                >
                  Add to Cart
                </button>
              </Link>
              {/* <button className={styles.iconButton}>
                {" "}
                <CiHeart size={20} strokeWidth={1.5} />{" "}
              </button>
              <button className={styles.iconButton}>
                <TbArrowsCross size={20} strokeWidth={1.5} />
              </button> */}
            </div>
            <div className={styles.securityIcons}>
              <img src="/addtocart.jpg" />
            </div>
            <div className={styles.infoSection}>
              <span className={styles.delivery}>Delivery & Return</span>
              <span className={styles.question}>Ask a Question</span>
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
        </div>
      </div>
      <ProductTabs />
    </div>
  );
};

export default ViewItemPage;
