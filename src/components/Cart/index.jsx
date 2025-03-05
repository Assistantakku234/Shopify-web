"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoClipboardOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Cart.module.css";

export default function Cart() {
  const [isChecked, setIsChecked] = useState(false);
  // cartItems
  const [cartItems, setCartItems] = useState([]);

  // quantities
  const [quantities, setQuantities] = useState([]);

  // useEffect
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    setQuantities(storedCart.map(() => 1));
  }, []);

  // Remove item from cart
  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    const updatedQuantities = quantities.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    setQuantities(updatedQuantities);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Local storage update
  };

  // Increment quantity
  const handleIncrement = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  // Decrement quantity
  const handleDecrement = (index) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );

  return (
    <>
    {/* Fixed Discount unlock */}
      <div className={styles.unlockCard}>
        <div className={styles.cartContent}>
          <p>
            Free Shipping for all orders over <span>$100.00</span>
          </p>
        </div>
        <div className={styles.progressContainer}>
          <FaShippingFast className={styles.truckIcon} />
          <div className={styles.progressBar}></div>
        </div>
      </div>
      {cartItems.length > 0 ? (
        // Cart With Items
        <div className={styles.container}>
          <div className={styles.cardsContainer}>
            {cartItems.map((item, index) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>₹{item.price * quantities[index]}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => handleDecrement(index)}>-</button>
                    <span>{quantities[index]}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                  <div className={styles.xtraBtns}>
                    <button className={styles.editDelete}>
                      <FiEdit />
                    </button>
                    <button
                      className={styles.editDelete}
                      onClick={() => handleRemoveItem(index)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.cartXtraBtns}>
              <button className={styles.neuMorphBtn}>
                <GoGift />
              </button>
              <button className={styles.neuMorphBtn}>
                <CiShoppingTag />
              </button>
              <button className={styles.neuMorphBtn}>
                <IoClipboardOutline />
              </button>
              <button className={styles.neuMorphBtn}>
                <BsTruck />
              </button>
            </div>
          </div>

          <div className={styles.shopFooter}>
            <div className={styles.subTotal}>
              <p>My cart</p>
              <p>{cartItems.length} items</p>
            </div>
            <div className={styles.subTotal}>
              <strong>Subtotal:</strong>
              <strong>$ {totalPrice}</strong>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <label
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              I agree with the terms and conditions.
            </label>
            <div
              className={styles.signInButtonWrapper}
              style={{
                cursor: isChecked ? "pointer" : "not-allowed",
                opacity: isChecked ? 1 : 0.5,
              }}
            >
              <Link href="/Check" className={styles.signInButton}>
                CheckOut
              </Link>
            </div>
            <img src={"/cartFooter.avif"} alt={"Antivirus Softwares"} />
          </div>
        </div>
      ) : (
        // Cart Empty
        <div className={styles.empty}>
          <svg
            id="icon-cart-emty"
            widht="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(135, 135, 135)"
            viewBox="0 0 576 512"
          >
            <path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path>
          </svg>
          <p>Your cart is empty</p>
          <Link href="/">
          <button className={styles.returnToShop}>
            Return to shop
          </button>
          </Link>
        </div>
      )}
    </>
  );
}
