import React from 'react'
import styles from '../styles/JoinDiscord.module.css'
const DISCORD_URL = 'https://discord.gg/7zuYcy4v2q';


export default function JoinDiscord() {
  return (
    <div className={styles.share}>
      <div className={styles.shareText}>Join the Convo on Discord!</div>
      <a
        href={`${DISCORD_URL}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className={`btn-secondary ${styles.shareBtn}`}>
          <img
            className={styles.twitterLogo}
            src="./images/discordlogo.png"
          />{" "}
        </button>
      </a>
    </div>
  )
}
