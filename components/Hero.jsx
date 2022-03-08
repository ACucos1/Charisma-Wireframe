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
            <br />
            through your NFT holdings and onchain activity.
        </p>

        <div className={styles.SearchWrapper}>
            <input className={styles.SearchInput} type="text" />
            <button className="btn-primary" onClick={handleSearch}>Find out</button>
        </div>
        <div className={styles.BadgeWrapper}>
          <Badge />
        </div>
        
    </div>
  )
}
