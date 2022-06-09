/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/ImageOverlay.module.css'

export default function ImageOverlay() {
  return (
    <div className={styles.imagesWrapper}>
        <img
          className={`doodle ${styles.doodle} ${styles.diamond}`}
          src="./images/diamond.svg"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.house}`}
          src="./images/house.svg"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.greensquig}`}
          src="./images/greensquig.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.pokerchip}`}
          src="./images/pokerchip.svg"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.butterfly}`}
          src="./images/butterfly.svg"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.toiletpaper}`}
          src="./images/toiletpaper.svg"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.upchart}`}
          src="./images/upchart.svg"
          alt=""
        />

        <img
          className={`doodle ${styles.doodle} ${styles.yellowsquig}`}
          src="./images/yellowsquig.png"
          alt=""
        />
      </div>
  )
}
