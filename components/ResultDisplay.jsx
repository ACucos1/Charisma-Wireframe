import React from "react";
import styles from "../styles/ResultDisplay.module.css";

export default function ResultDisplay({ wpi }) {
  return (
    <div className={styles.resultDisplayWrapper}>
      {/* <p className={styles.descriptionSmall}>=DIAMOND HANDS, EARLY ADOPTER, OVER PERFORMANCE, <br /> SMALL PROJECT SUPPORTER</p> */}
      <div className={styles.resultDisplay}>
        <ul className={styles.traitsList}>
          <li className={`${styles.trait} ${wpi && wpi["1"].info.Value == "D" ? styles.D : styles.P}`}>
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


          {wpi && wpi["1"].info.Value == "D" ? 
            <img
            src="./images/diamond.svg"
            alt=""
            className={`${styles.img} ${styles.diamond}`}
          />
          :
          <img
            src="./images/toiletpaper.svg"
            alt=""
            className={`${styles.img} ${styles.toiletpaper}`}
          />

          }

          {wpi && wpi["2"].info.Value === "H" ? 
            <img
            src="./images/house.svg"
            alt=""
            className={`${styles.img} ${styles.house}`}
            />
            :
            <img
            src="./images/buttefly.svg"
            alt=""
            className={`${styles.img} ${styles.butterfly}`}
            />
          }


          {wpi && wpi["3"].info.Value == "F" ?  
            <img
              src="./images/chick.svg"
              alt=""
              className={`${styles.img} ${styles.chick}`}
            />
            :
            <img
              src="./images/pokerchip.svg"
              alt=""
              className={`${styles.img} ${styles.pokerchip}`}
            />
          }

          {wpi && wpi["4"].info.Value === "U" ? 
            <img
            src="./images/upchart.svg"
            alt=""
            className={`${styles.img} ${styles.upchart}`}
            />
          :
            <img
              src="./images/downchart.svg"
              alt=""
              className={`${styles.img} ${styles.downchart}`}
            />
          }

          <div className={styles.timeStamp}>Wallet Birth Date: <br/> {wpi && new Date(wpi["5"].info.Value).toDateString()}</div>
          
          
        </div>
      </div>
    </div>
  );
}
