"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

const images = ["/Backpack01.jpg", "/Blush Beanie01.jpg"]; // Replace with actual images

export default function InstagramSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>@ FOLLOW US ON INSTAGRAM</h3>

            {/* Image Slider */}
            <div className={styles.slider}>
                <button className={styles.arrowLeft} onClick={prevSlide}>&#10094;</button>

                <div className={styles.imageWrapper}>
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt="Instagram Post"
                            width={250}  // Adjust size based on design
                            height={250}
                            className={styles.image}
                            priority
                        />
                    ))}
                </div>

                <button className={styles.arrowRight} onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Free Shipping Section */}
            <div className={styles.freeShipping}>
                <span className={styles.truckIcon}>🚚</span>
                <div>
                    <h4>FREE SHIPPING</h4>
                    <p>Free shipping on all US orders or orders above $100</p>
                </div>
            </div>

            {/* Dots for Indicator */}
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
