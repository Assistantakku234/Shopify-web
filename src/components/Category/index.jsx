import Image from "next/image";
import styles from "./Category.module.css";
const categories = [
  { src: "/assets/category/women.jpg", label: "Women" },
  { src: "/assets/category/accessories.jpg", label: "Accessories" },
  { src: "/assets/category/footwear.jpg", label: "Footwear" },
  { src: "/assets/category/watches.jpg", label: "Watches" },
];

const CategoryGrid = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src="/women.jpg" alt="women" />
        </div>
        <div className={styles.otherSide}>
          <div className={styles.center}>
            <div>
              <img src="/accesories.jpg" alt="accessories" />
            </div>
            <div>
              <img src="/footwear.jpg" alt="footwear" />
            </div>
          </div>
          <div className={styles.rightSide}>
            <img src="/watch.jpg" alt="watches" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryGrid;
