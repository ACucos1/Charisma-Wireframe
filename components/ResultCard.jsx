import React from "react";
import styles from "../styles/ResultCard.module.css";

export default function ResultCard() {
  return (
    <div className={styles.ResultCard}>
      <div className={styles.StatsWrapper}>
        <div className={styles.Trait}>💎 Diamond Hands Connaisseur</div>
        <div className={styles.Stats}>
          <div className={styles.Stat}>10</div>
          <div className={styles.Stat}>10</div>
          <div className={styles.Stat}>10</div>
        </div>
        <p className={styles.StatLabel}>avg. holding time</p>
      </div>
      <div className={styles.Explanation}>
        An early supporter means you <br /> see trends early, and know <br />{" "}
        all the right people. You <br /> believe in things before <br /> anyone
        else.
      </div>
    </div>
  );
}
