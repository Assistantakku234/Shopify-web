"use client";
import { useState } from "react";
import styles from "./ProductInformation.module.css"; // Import CSS module

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* Tabs */}
                <div className={styles.tabs}>
                    {["Description"].map(
                        (tab) => {
                            const tabKey = tab.toLowerCase().replace(/\s/g, "");
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={`${styles.tab} ${activeTab === tabKey ? styles.activeTab : ""
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        }
                    )}
                </div>

                {/* Tab Content */}
                <div className={styles.content}>
                    {activeTab === "description" && (
                        <div>
                            <h4 className={styles.heading}>Viverra a consectetur</h4>
                            <p className={`${styles.text} ${styles.italic}`}>
                                Go sporty this summer with this vintage navy and white striped
                                v-neck t-shirt from Nike. Perfect for pairing with denim and white
                                kicks for a stylish sporty vibe.
                            </p>

                            <h2 className={styles.heading}>Facilisis scelerisque mi</h2>
                            <p className={styles.text}>
                                Typography is the work of typesetters, compositors, typographers,
                                graphic designers, art directors, manga artists, comic book
                                artists, graffiti artists, and now—anyone who arranges words,
                                letters, numbers, and symbols for publication, display, or
                                distribution—from clerical workers and newsletter writers to
                                anyone self-publishing materials.
                            </p>

                            <h2 className={styles.heading}>Ullamcorper metus</h2>
                            <p className={styles.text}>
                                As the capability to create typography has become ubiquitous, the
                                application of principles and best practices developed over
                                generations of skilled workers and professionals has diminished.
                                Ironically, at a time when scientific techniques.
                            </p>

                            <h2 className={styles.heading}>Dignissim a leo cum</h2>
                            <p className={styles.text}>
                                Digitization opened up typography to new generations of previously
                                unrelated designers and lay users, and David Jury, head of graphic
                                design at Colchester Institute in England, states that “typography
                                is now something everybody does. As the capability to create
                                typography has become ubiquitous, the application of principles
                                and best practices developed over generations of skilled workers
                                and professionals has diminished. Ironically, at a time when
                                scientific techniques.
                            </p>
                        </div>
                    )}

                    {/* Additional Information Tab - Table View */}
                    {activeTab === "additionalinformation" && (
                        <table className={styles.table}>
                            <tbody>
                                <tr>
                                    <th>Size</th>
                                    <td>S, M, L, XL</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    {activeTab === "customtab" && (
                        <div className={styles.customTabContainer}>
                            {/* Washing Symbols (You can replace with actual icon components if using a library like FontAwesome) */}
                            <div className={styles.iconContainer}>
                                <span>🧼</span>
                                <span>❌</span>
                                <span>♨️</span>
                                <span>🅿️</span>
                                <span>⚫</span>
                                <span>⬛</span>
                            </div>

                            {/* Fabric Composition */}
                            <p className={styles.fabricInfo}>
                                <span>LT01:</span> 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt
                            </p>
                        </div>
                    )}
                    {activeTab === "reviews" && <p className={styles.text}>Reviews content goes here...</p>}
                </div>
            </div>
        </div>
    );
}
