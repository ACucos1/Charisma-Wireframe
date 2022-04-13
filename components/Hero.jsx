import React, { useEffect } from 'react'
import Badge from '../components/Badge'
import styles from '../styles/Hero.module.css'
import Router from 'next/router'

export default function Hero() {



  const handleSearch = () => {
    Router.push("/results")
  }


  return (
    <div className={`${styles.Hero} full-screen`}>
        <h1 className={styles.TagLine}>What does your wallet <br /> say about you?</h1>
        <p className={styles.Desc}>
            Charisma is a tool that analyzes your personality
            through your NFT holdings and onchain activity.
        </p>

        <div className={styles.SearchWrapper}>
            <input className={styles.SearchInput} type="text" placeholder="Enter ENS domain or Ethereum address here"/>
            <button className={`btn-secondary ${styles.searchBtn}`} onClick={handleSearch}>Find out</button>
        </div>
        {/* <div className={styles.BadgeWrapper}>
          <Badge />
        </div> */}
        <div className={styles.imagesWrapper}>
          <img className={`doodle ${styles.doodle} ${styles.bluesquig}`} src="./images/bluesquig.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.diamond}`} src="./images/diamond.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.foot}`} src="./images/foot.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.greensquig}`} src="./images/greensquig.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.pokerchip}`} src="./images/pokerchip.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.pot}`} src="./images/pot.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.star}`} src="./images/star.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.sunset}`} src="./images/sunset.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.toiletpaper}`} src="./images/toiletpaper.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.upchart}`} src="./images/upchart.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.yellowsquig}`} src="./images/yellowsquig.png" alt="" />
        </div>
        
        
    </div>
  )
}
