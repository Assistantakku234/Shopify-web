import { useState } from "react";
import styles from "./mobileNav.module.css";

const categories = [
    { id: 1, name: "New Arrival", image: "/Newarrival.jpg" },
    { id: 2, name: "Decor", image: "/Decor.jpg" },
    { id: 3, name: "Denim", image: "/Decor.jpg" },
    { id: 4, name: "Dress", image: "/Decor.jpg" },
    { id: 5, name: "Hats", image: "/Hats.jpg" },
    { id: 6, name: "Men", image: "/Men.jpg" },
    { id: 7, name: "Sale", image: "/Sale.jpg" },
    { id: 8, name: "Shoes", image: "/Shoes.jpg" },
    { id: 9, name: "Women", image: "/Women.jpg" },
];

const MobileNavbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Function to handle category click
    const handleCategoryClick = (index) => {
        setSelectedIndex(index);
    };

    // Function to go to the next category
    const handleNext = () => {
        if (selectedIndex < categories.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    // Function to go to the previous category
    const handlePrev = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <div>
            {/* Categories Navbar */}
            <div className={styles.navbarContainer}>
                <span className={styles.arrow} onClick={handlePrev}>&#8249;</span> {/* Left Arrow */}
                <div className={styles.navbar}>
                    {categories.map((category, index) => (
                        <span
                            key={category.id}
                            className={`${styles.categoryItem} ${index === selectedIndex ? styles.active : ""}`}
                            onClick={() => handleCategoryClick(index)}
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
                <span className={styles.arrow} onClick={handleNext}>&#8250;</span> {/* Right Arrow */}
            </div>


        </div>
    );
};

export default MobileNavbar;
