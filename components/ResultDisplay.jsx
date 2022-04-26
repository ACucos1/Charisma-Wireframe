import React from "react";
import styles from "../styles/ResultDisplay.module.css";

export default function ResultDisplay({ wpi }) {
  return (
    <div className={styles.resultDisplayWrapper}>
      {/* <p className={styles.descriptionSmall}>=DIAMOND HANDS, EARLY ADOPTER, OVER PERFORMANCE, <br /> SMALL PROJECT SUPPORTER</p> */}
      <div className={styles.resultDisplay}>
        <ul className={styles.traitsList}>
          <li className={`${styles.trait} ${styles.trait1}`}>
            {wpi && wpi["1"].info.LongDesc}
          </li>
          <li className={`${styles.trait} ${styles.trait2}`}>
            {wpi && wpi["2"].info.LongDesc}
          </li>
          <li className={`${styles.trait} ${styles.trait3}`}>
            {wpi && wpi["3"].info.LongDesc}
          </li>
          <li className={`${styles.trait} ${styles.trait4}`}>
            {wpi && wpi["4"].info.LongDesc}
          </li>
        </ul>
        <div className={styles.images}>
          <img
            src="./images/upchart.png"
            alt=""
            className={`${styles.img} ${styles.img1}`}
          />
          <img
            src="./images/pot.png"
            alt=""
            className={`${styles.img} ${styles.img2}`}
          />
          <img
            src="./images/sunset.png"
            alt=""
            className={`${styles.img} ${styles.img3}`}
          />
          <img
            src="./images/diamond.png"
            alt=""
            className={`${styles.img} ${styles.img4}`}
          />
        </div>
      </div>
    </div>
  );
}
