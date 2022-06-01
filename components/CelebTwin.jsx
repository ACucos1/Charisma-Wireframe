/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/ResultDisplay.module.css";

export default function CelebTwin({ wpi }) {
  return (
    <div className={styles.resultDisplayWrapper}>
      <div className={styles.resultDisplay}>
        <ul className={styles.traitsList2}>
          <li
            className={`${styles.trait} ${
              wpi && wpi["1"].info.Value == "D" ? styles.D : styles.P
            }`}
          >
            {wpi["1"].info.Value}: {wpi["1"].info.LongDesc}
          </li>
          <li
            className={`${styles.trait} ${
              wpi && wpi["2"].info.Value == "H" ? styles.H : styles.S
            }`}
          >
            {wpi["2"].info.Value}: {wpi["2"].info.LongDesc}
          </li>
          <li
            className={`${styles.trait} ${
              wpi && wpi["3"].info.Value == "B" ? styles.B : styles.F
            }`}
          >
            {wpi["3"].info.Value}: {wpi["3"].info.LongDesc}
          </li>
          <li
            className={`${styles.trait} ${
              wpi && wpi["4"].info.Value == "U" ? styles.U : styles.L
            }`}
          >
            {wpi["4"].info.Value}: {wpi["4"].info.LongDesc}
          </li>
        </ul>
        <div className={styles.celebContainer}>
          <div className={styles.celebItem}>
            <img
              className={styles.celebText}
              src="/images/celebText.png"
              alt="My Charisma twin is"
            />
          </div>
          <div className={styles.celebItem}>
            <TwitterProfile />
          </div>
        </div>
        <img
          className={styles.swirl}
          id={styles.swirl1}
          src="/images/swirl1.png"
          alt="swirl"
        />
        <img
          className={styles.swirl}
          id={styles.swirl2}
          src="/images/swirl2.png"
          alt="swirl"
        />
      </div>
    </div>
  );
}

const TwitterProfile = ({ twitterObj }) => {
  return (
    <div className={styles.twitterProfileContainer}>
      <div className={styles.twitterInnerProfileContainer}>
        <div className={styles.upperHalfBg}></div>
        <div className={styles.lowerHalfBg}>
          <div className={styles.twitterDetails}>
            <div>
              <span className={styles.name}>tydollar.eth</span>
              <img src="/images/verified.png" alt="verfied-tick" />
            </div>
            <span className={styles.username}>@tydollar</span>
          </div>
        </div>
        <img
          className={styles.avatar}
          src="https://gradle.org/images/gradle-400x400.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};
