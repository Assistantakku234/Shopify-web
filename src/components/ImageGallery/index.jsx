"use client";
import { useState } from "react";
import styles from "./ImageGallery.module.css";

const Imagega = () => {
    const textData = [
        { title: "FREE SHIPPING", desc: "Free shipping on all US orders or above $100" },
        { title: "SUPPORT 24/7", desc: "Contact us 24 hours a day, 7 days a week" },
        { title: "30 DAYS RETURN", desc: "Simply return it within 30 days for an exchange" },
        { title: "100% PAYMENT SECURE", desc: "We ensure secure payments with PV" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("left");

    const handleLeftToRight = () => {
        if (activeIndex < textData.length - 1) {
            setDirection("left");
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleRightToLeft = () => {
        if (activeIndex > 0) {
            setDirection("right");
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div
                    className={`${styles.textWrapper} ${direction === "left" ? styles.left : styles.right}`}
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {textData.map((item, index) => (
                        <div key={index} className={styles.textCard}>
                            <svg viewBox="0 0 29 32" width="29" height="32">
                                <path d="M 5.867 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 s 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 5.867 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path>
                                <path d="M 22.933 15.467 c -1.173 0 -2.133 0.96 -2.133 2.133 s 0.96 2.133 2.133 2.133 c 1.173 0 2.133 -0.96 2.133 -2.133 s -0.96 -2.133 -2.133 -2.133 Z M 22.933 18.667 c -0.587 0 -1.067 -0.48 -1.067 -1.067 s 0.48 -1.067 1.067 -1.067 c 0.587 0 1.067 0.48 1.067 1.067 s -0.48 1.067 -1.067 1.067 Z"></path>
                                <path d="M 25.12 11.2 l -0.907 -4.267 c -0.373 -1.387 -1.44 -2.133 -2.88 -2.133 h -13.867 c -1.493 0 -2.347 0.747 -2.773 2.133 l -0.96 4.267 h -3.733 v 1.067 h 3.467 v 0.053 c -1.653 0.107 -2.933 1.493 -2.933 3.2 v 7.413 h 1.6 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 13.867 v 1.6 c 0 1.493 1.173 2.667 2.667 2.667 s 2.667 -1.173 2.667 -2.667 v -1.6 h 1.6 v -7.413 c 0 -1.653 -1.28 -3.04 -2.88 -3.2 v -0.053 h 3.413 v -1.067 h -3.68 Z M 5.707 7.253 c 0.32 -0.96 0.8 -1.387 1.76 -1.387 h 13.867 c 1.013 0 1.6 0.427 1.867 1.333 l 1.067 5.12 h -19.733 l 1.173 -5.067 Z M 6.4 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 25.6 24.533 c 0 0.907 -0.693 1.6 -1.6 1.6 s -1.6 -0.693 -1.6 -1.6 v -1.6 h 3.2 v 1.6 Z M 27.2 15.52 v 6.347 h -25.6 v -6.347 c 0 -1.173 0.96 -2.133 2.133 -2.133 h 21.333 c 1.173 0 2.133 0.96 2.133 2.133 Z"></path>
                            </svg>
                            <h3 onMouseEnter={handleLeftToRight} onMouseLeave={handleRightToLeft}>
                                {item.title}
                            </h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className={styles.dots}>
                {textData.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Imagega;
