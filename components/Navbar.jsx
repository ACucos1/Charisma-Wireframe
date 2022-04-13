import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
        <div className={styles.LogoWrapper}>
          {/* <Link href="/" passHref><div className={styles.Logo}>LOGO</div></Link> */}
          <Link href="/" passHref><img className={styles.Logo} src="./images/EYE.svg" /></Link>
          <div>SEASON 0 ALPHA</div>
        </div>

        <div className={styles.NavList}>
            <ul className={styles.NavLinks}>
                <li className={styles.NavLink}>COMMUNITY</li>
                <li className={styles.NavLink}>METHODOLOGY</li>
                <li className={styles.NavLink}>FAQ</li>
                <li className={styles.NavLink}><button className={`btn-secondary ${styles.connect}`}>Connect Wallet</button></li>
            </ul>
        </div>
    </div>
  )
}
