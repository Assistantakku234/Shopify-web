import Image from "next/image";
import styles from "./Category.module.css";

const CategoryGrid = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.imageWrapper}>
            <img src="/women.jpg" alt="women" />
            <button className={styles.viewButton}>Women</button>
          </div>
        </div>
        <div className={styles.otherSide}>
          <div className={styles.center}>
            <div className={styles.centerImageContainer}>
              <img src="/accesories.jpg" alt="accessories" />
              <button className={styles.viewButton}>Accessories</button>
            </div>
            <div className={styles.centerImageContainer}>
              <img src="/footwear.jpg" alt="footwear" />
              <button className={styles.viewButton}>Footwear</button>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.imageWrapper}>
              <img src="/watch.jpg" alt="watches" />
              <button className={styles.viewButton}>Watches</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;