/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { Web3Context } from "../contexts/Web3Context";
import Link from "next/link";
import truncateAddress from "../utils";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { handleConnectClick, address, handleDisconnect, ens } =
    useContext(Web3Context);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.LogoWrapper}>
        {/* <Link href="/" passHref><div className={styles.Logo}>LOGO</div></Link> */}
        <Link href='/' passHref>
          <img className={styles.Logo} src='./images/EYE.svg' />
        </Link>

        <div> SEASON 0 ALPHA </div>
      </div>

      <div className={styles.menuBtnWrapper}>
        <div
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
          className={`${styles.menuBtn} ${menuOpen && styles.open}`}>
          <div className={styles.burger}></div>
        </div>
      </div>

      <div className={`${styles.NavList} ${menuOpen && styles.open}`}>
        <ul className={styles.NavLinks}>
          <li className={styles.NavLink}>
            <a
              href='https://twitter.com/Charisma_Social'
              target='_blank'
              rel='noreferrer'>
              <img
                className={styles.twitterLogo}
                src='./images/TwitterLogoWhite.svg'
                alt='twitter'
              />
            </a>
          </li>

          <li className={styles.NavLink}>
            <a
              href='https://discord.gg/7zuYcy4v2q'
              target='_blank'
              rel='noreferrer'>
              <img
                className={styles.discordLogo}
                src='./images/discordlogo.png'
                alt='discord'
              />
            </a>
          </li>

          <li className={styles.NavLink}>
            <a
              href='https://docs.google.com/spreadsheets/d/1DIRvy4ow9E19Rn0k2tmJ70cZoi0jFmHQqGyrHkD_52A/edit#gid=0'
              target='_blank'
              rel='noreferrer'>
              CELEBRITY PERSONALITIES
            </a>
          </li>
          <li className={styles.NavLink}>
            <Link href='/methodology' passHref>
              TRAITS &amp; METHODOLOGY
            </Link>
          </li>
          <li className={styles.NavLink}>
            <a
              href='https://docs.google.com/forms/d/1Sdp7vQIkwy5sx_DCx-7AC6-L_54TlUWjEHS8rId-Q08/edit'
              target='_blank'
              rel='noreferrer'>
              PARTNERSHIPS
            </a>
          </li>
          <li className={`${styles.NavLink} ${styles.connect}`}>
            <button
              className={`btn-secondary ${styles.connect}`}
              onClick={handleConnectClick}>
              {ens
                ? ens
                : address
                ? truncateAddress(address)
                : "Connect Wallet"}
            </button>
          </li>

          <li className={`${styles.NavLink} ${styles.disconnect}`}>
            <button
              className={`btn-secondary ${styles.disconnect} ${
                address ? styles.visible : ""
              }`}
              onClick={handleDisconnect}>
              <img
                className={styles.disconnectIcon}
                src='./images/powerIcon.svg'
                alt='disconnect'
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
