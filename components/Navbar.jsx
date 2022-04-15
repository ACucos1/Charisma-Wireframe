import React, { useContext } from 'react'
import { Web3Context } from '../contexts/Web3Context'
import Link from 'next/link'
import truncateAddress from '../utils'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const {handleConnectClick, address} = useContext(Web3Context)


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
                <li className={styles.NavLink}>PARTNERSHIPS</li>
                <li className={styles.NavLink}><button className={`btn-secondary ${styles.connect}`} onClick={handleConnectClick} >{address ? truncateAddress(address) : "Connect Wallet"}</button></li>
            </ul>
        </div>
    </div>
  )
}
