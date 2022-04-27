import React, { useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import Link from "next/link";
import truncateAddress from "../utils";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { handleConnectClick, address, handleDisconnect } = useContext(Web3Context);

  return (
    <div className={styles.Navbar}>
      <div className={styles.LogoWrapper}>
        {/* <Link href="/" passHref><div className={styles.Logo}>LOGO</div></Link> */}
        <Link href="/" passHref>
          <img className={styles.Logo} src="./images/EYE.svg" />
        </Link>

        <div> SEASON 0 ALPHA </div>
      </div>

      <div className={styles.NavList}>
        <ul className={styles.NavLinks}>

          <li className={styles.NavLink}>
            <a href="https://twitter.com/Charisma_Social" target="_blank" rel="noreferrer">
              <img className={styles.twitterLogo} src="./images/TwitterLogoWhite.svg" alt="twitter" />

            </a>
          </li>

          
          <li className={styles.NavLink}>
            <a href="https://discord.gg/7zuYcy4v2q" target="_blank" rel="noreferrer">
              <img className={styles.discordLogo} src="./images/discordicon.svg" alt="twitter" />

            </a>
          </li>


          <li className={styles.NavLink}>
            <a
              href="https://charisma-social.notion.site/Traits-Season-0-Alpha-f3787fed16614460a0bb69a898f16ef6"
              target="_blank"
              rel="noreferrer"
            >
              LEARN ABOUT THE TRAITS
            </a>
          </li>
          <li className={styles.NavLink}>
            <a
              href="https://charisma-social.notion.site/Methodology-35d599c5f2bd4d01a91cb68a9a3084ba"
              target="_blank"
              rel="noreferrer"
            >
              METHODOLOGY
            </a>
          </li>
          <li className={styles.NavLink}>
            <a href="https://docs.google.com/forms/d/1gyKQujDEzvdDRmB9ZqcOWEGXUvlrB08BWVY-CcbsW6g/edit" target="_blank" rel="noreferrer">PARTNERSHIPS
              PARTNERSHIPS
            </a>
          </li>
          <li className={styles.NavLink}>
            <button
              className={`btn-secondary ${styles.connect}`}
              onClick={handleConnectClick}
            >
              {address ? truncateAddress(address) : "Connect Wallet"}
            </button>
          </li>

          <li className={styles.NavLink}>
            <button
              className={`btn-secondary ${styles.disconnect} ${address ? styles.visible : ""}`}
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
