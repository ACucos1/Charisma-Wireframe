import React from "react";
import Badge from "../components/Badge";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Explanation}>
        <div className={styles.TextWrapper}>
          <h2>See our methodology.</h2>
          <p>
            Charisma explores the foundational elements of a reputation.
            <br /> <br />
            It lays the groundwork for a more fair and open world by increasing
            transparency and context in how information is being used and
            interpreted.
          </p>
        </div>
        <button className={`btn-secondary ${styles.learnMore}`}>
          LEARN MORE
        </button>
      </div>

      <div className={styles.ContentWrapper}>
        <div className={styles.Content1}>
          <Badge />
        </div>

        <ul className={styles.footerNav}>
          <li>LEARN ABOUT THE TRAITS</li>
          <li>METHODOLOGY</li>
          <li>TEAM</li>
          <li>DISCORD</li>
          <li>TERMS OF SERVICE</li>
          <li>PRIVACY</li>
        </ul>
      </div>
    </div>
  );
}
