"use client";
import React from "react";
import styles from "./Mobileviewproduct.module.css";

const MobileViewProduct = () => {
    return (
        <div className={styles.mobileOnly}>
            <div className={styles.productContainer}>
                <img src="/Backpack02.jpg" alt="T-Shirt" className={styles.mainImage} />
                <div className={styles.thumbnailContainer}>
                    <img src="/shirt-thumb1.jpg" alt="Thumbnail 1" className={styles.thumbnail} />
                    <img src="/shirt-thumb2.jpg" alt="Thumbnail 2" className={styles.thumbnail} />
                    <img src="/shirt-thumb3.jpg" alt="Thumbnail 3" className={styles.thumbnail} />
                </div>
            </div>
        </div>
    );
};

export default MobileViewProduct;
