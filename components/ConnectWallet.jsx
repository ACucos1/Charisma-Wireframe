import React from 'react'
import styles from '../styles/ConnectWallet.module.css'


export default function JoinDiscord({handleWhitelistClick, address}) {
  return (
    <div className={styles.share}>
      <div className={styles.shareText}>{!address ? "1. Connect Your Wallet!" : "1. Wallet Connected!"}</div>
        <button onClick={handleWhitelistClick} className={`btn-secondary ${styles.shareBtn}`}>
          <img
            className={styles.twitterLogo}
            src="./images/wallet.png"
          />{" "}
        </button>
    </div>
  )
}
