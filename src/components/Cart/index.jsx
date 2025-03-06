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
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const uniqueItems = storedCart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    setCartItems(uniqueItems);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrement = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
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
        <div className={styles.container}>
          <div className={styles.cardsContainer}>
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className={styles.cartItem}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>₹{item.price * item.quantity}</p>
                  <div className={styles.quantityControl}>
                    {item.quantity > 1 ? (
                      <button onClick={() => handleDecrement(index)}>
                        -
                      </button>
                    ) : (
                      <button onClick={() => handleRemoveItem(index)}>
                        -
                      </button>
                    )}
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </div>
                  <button
                    className={styles.editDelete}
                    onClick={() => handleRemoveItem(index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
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
            <div className={styles.signInButtonWrapper}>
              <Link href="/Check" className={styles.signInButton}>
                CheckOut
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Your cart is empty</p>
          <Link href="/">
            <button className={styles.returnToShop}>Return to shop</button>
          </Link>
        </div>
      )}
    </>
  );
}