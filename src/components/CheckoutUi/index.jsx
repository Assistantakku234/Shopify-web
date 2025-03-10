"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import styles from "./Continue.module.css";

export default function CheckoutUI() {
    // Cart items state
    const [cartItems, setCartItems] = useState([]);

    // Quantities state
    const [quantities, setQuantities] = useState([]);

    // Load cart from local storage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const mergedCart = mergeCartItems(storedCart);
        setCartItems(mergedCart.items);
        setQuantities(mergedCart.quantities);
    }, []);

    // Function to merge duplicate items
    const mergeCartItems = (items) => {
        const merged = {};
        items.forEach(item => {
            if (merged[item.title]) {
                merged[item.title].quantity += 1;
            } else {
                merged[item.title] = { ...item, quantity: 1 };
            }
        });
        return {
            items: Object.values(merged),
            quantities: Object.values(merged).map(item => item.quantity)
        };
    };

    // Remove item from cart
    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        const updatedQuantities = quantities.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        setQuantities(updatedQuantities);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
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

    // Calculate total number of items including quantities
    const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.cartSection}>
                    <div className={styles.cartTitle}>
                        <h2>My cart</h2>
                        <div className={styles.cartItem}>
                            <span>{totalItems} items</span>
                        </div>
                    </div>

                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className={styles.cartItem}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>₹{item.price * quantities[index]}</p>
                                </div>
                                <button
                                    className={styles.removeBtn}
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    Remove
                                </button>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => handleDecrement(index)}>-</button>
                                    <span>{quantities[index]}</span>
                                    <button onClick={() => handleIncrement(index)}>+</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}

                    <div className={styles.totalPrice}>
                        <h3>Total: ₹{totalPrice}</h3>
                    </div>
                </div>
                <div className={styles.summarySection}>
                    <div className={styles.coupons}>
                        <h4>Coupons and offers</h4>
                        <p>Save more with coupon and offers</p>
                        <input type="text" placeholder="Enter coupen code" className={styles.input} />
                        <button className={styles.applyButton}>Apply</button>

                    </div>
                    <div className={styles.orderSummary}>
                        <h4 className={styles.orderHeading}>Order Summary</h4>
                        <hr className={styles.divider} />
                        <div className={styles.row}>
                            <span>Items</span>
                            <span>1</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.summaryItem}>Items total</span>
                            <div className={styles.totalPrice}>{` ₹${totalPrice}`}</div>
                        </div>

                        <div className={styles.summaryItem}>Delivery fee:- <span className={styles.free}>Free</span></div>
                        <div className={styles.totalCost}>{`Total cost:-  ₹${totalPrice} /-`}</div>

                        <p className={styles.taxInfo}>Inclusive of all taxes</p>
                        <Link href="/Form">
                            <button
                                className={styles.continueButton}
                                onClick={() => {
                                    localStorage.setItem("selectedCart", JSON.stringify(cartItems));
                                    localStorage.setItem("selectedQuantities", JSON.stringify(quantities));
                                }}
                            >
                                Continue
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}