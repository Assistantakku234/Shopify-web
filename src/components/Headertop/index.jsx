
"use client";

import { useState } from "react";
import styles from './Headertop.module.css'
export default function Headertop() {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);

  if (!visible) return null;

  return (
    <div className={styles.topAlert}>
      <p>
        Today deal sale off <strong>70%</strong>. End in.
        <span
          className={styles.promoHighlight}
        >
          Hurry Up <span className={styles.arrow}> →</span>
        </span>
      </p>
      <button className={styles.closeIcon} onClick={() => setVisible(false)}><inline className={styles.crossIcon}>× </inline> close</button>
    </div>
  );
}
