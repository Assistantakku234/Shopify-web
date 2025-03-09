"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import styles from "./Payment.module.css";

const Payment = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState("cod"); // ✅ Default Payment Mode

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("selectedCart")) || [];
        const storedQuantities = JSON.parse(localStorage.getItem("selectedQuantities")) || [];
        setCartItems(storedCart);
        setQuantities(storedQuantities);
    }, []);

    const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
    const totalPrice = cartItems.reduce(
        (sum, item, index) => sum + (item.price * (quantities[index] || 1)),
        0
    );

    return (
        <div className={styles.checkoutContainer}>
            {/* ✅ Payment Section */}
            <div className={styles.cartSection}>
                <h2>Choose payment mode</h2>
                <div className={styles.paymentOptions}>
                    <div
                        className={`${styles.paymentOption} ${selectedPayment === "cod" ? styles.selected : ""}`}
                        onClick={() => setSelectedPayment("cod")}
                    >
                        <span>🖥️</span>
                        <p>Cash on delivery</p>
                    </div>
                    <div
                        className={`${styles.paymentOption} ${selectedPayment === "qr" ? styles.selected : ""}`}
                        onClick={() => setSelectedPayment("qr")}
                    >
                        <span>📷</span>
                        <p>QR Payment</p>
                    </div>
                </div>

                <h3>Pay on delivery</h3>
                <p>Pay in cash or pay in person at the time of delivery</p>
                <button className={styles.placeOrderBtn}>Place Order</button>
            </div>

            {/* ✅ Order Summary Section (Dynamic Data) */}
            <div className={styles.summarySection}>
                <div className={styles.coupons}>
                    <h4>Coupons and offers</h4>
                    <p>Save more with coupon and offers</p>
                    <input type="text" placeholder="Enter coupon code" className={styles.input} />
                    <button className={styles.applyButton}>Apply</button>
                </div>

                <div className={styles.orderSummary}>
                    <h3>Order Summary</h3>
                    <hr className={styles.divider} />

                    <div className={styles.row}>
                        <span>Items</span>
                        <span>{totalItems}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.summaryItem}>Items total</span>
                        <div className={styles.summaryItem}>{` ₹${totalPrice}`}</div>
                    </div>

                    <div className={styles.summaryItem}>Delivery fee:- <span className={styles.free}>Free</span></div>
                    <div className={styles.totalCost}>{`Total cost:-  ₹${totalPrice} /-`}</div>

                    <Link href="/Pay">
                        <button className={styles.continueButton}>Continue</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Payment;
