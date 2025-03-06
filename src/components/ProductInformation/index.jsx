"use client";
import { useState } from "react";
import styles from "./ProductInformation.module.css";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab("description")}
          className={`${styles.tab} ${
            activeTab === "description" ? styles.activeTab : ""
          }`}
        >
          Description
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "description" && (
          <div>
            <h2 className={styles.heading}>Viverra a consectetur</h2>
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
      </div>
    </div>
  );
}
