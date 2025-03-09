import React, { useState } from "react";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className={styles.galleryContainer}>
            {/* 🖼️ Badi Image */}
            <div className={styles.mainImageContainer}>
                <img src={selectedImage} alt="Main" className={styles.mainImage} />
            </div>

            {/* 📌 Teen Choti Images */}
            <div className={styles.thumbnails}>
                {images.slice(1, 4).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`${styles.thumbnail} ${selectedImage === img ? styles.active : ""}`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
