import { useContext, useEffect, useState } from 'react';
import { Web3Context } from '../contexts/Web3Context';
import Badge from '../components/Badge';
import styles from '../styles/Hero.module.css';
import Router from 'next/router';
import PasswordModal from './PasswordModal';

export default function Hero() {
  const {
    address,
    searchAddr,
    setSearchAddr,
    signInAddr,
    startWpi,
    getResult,
    wpi,
    setSearchStarted,
  } = useContext(Web3Context);

  const handleSearchChange = (e) => {
    setSearchAddr(e.target.value);
  };

  const handleSearch = () => {
    if (searchAddr && searchAddr.length == 42) {
      startWpi(searchAddr);
      setSearchStarted(true);
      if (searchAddr) {
        Router.push('/results');
      }
    }
  };

  useEffect(() => {
    setSearchAddr('');
  }, [setSearchAddr]);

  useEffect(() => {
    setSearchAddr(address);
  }, [signInAddr, setSearchAddr, address]);

  return (
    <div className={`${styles.Hero} full-screen`}>
      <PasswordModal />
      <h1 className={styles.TagLine}>
        What does your wallet <br /> say about you?
      </h1>
      <p className={styles.Desc}>
        Analyze your personality through your NFT holdings and onchain activity.
      </p>

      <div className={styles.bigConnect}>
        {/* <button className={`btn-secondary ${styles.connectBtn}`} onClick={handleWalletSearch}>{address != null ? truncateAddress(address) : "CONNECT WALLET TO FIND OUT"}</button> */}
      </div>
      {/* <span className={styles.Desc}>OR</span> */}
      <div className={styles.SearchWrapper}>
        <input
          className={styles.SearchInput}
          onChange={handleSearchChange}
          value={searchAddr}
          type="text"
          placeholder="ENS domain or Eth address"
        />
        <button className={`btn-secondary ${styles.searchBtn}`} onClick={handleSearch}>
          Find out
        </button>
      </div>
      <div className={styles.imagesWrapper}>
        <img
          className={`doodle ${styles.doodle} ${styles.bluesquig}`}
          src="./images/bluesquig.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.diamond}`}
          src="./images/diamond.png"
          alt=""
        />
        <img className={`doodle ${styles.doodle} ${styles.foot}`} src="./images/foot.png" alt="" />
        <img
          className={`doodle ${styles.doodle} ${styles.greensquig}`}
          src="./images/greensquig.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.pokerchip}`}
          src="./images/pokerchip.png"
          alt=""
        />
        <img className={`doodle ${styles.doodle} ${styles.pot}`} src="./images/pot.png" alt="" />
        <img className={`doodle ${styles.doodle} ${styles.star}`} src="./images/star.png" alt="" />
        <img
          className={`doodle ${styles.doodle} ${styles.sunset}`}
          src="./images/sunset.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.toiletpaper}`}
          src="./images/toiletpaper.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.upchart}`}
          src="./images/upchart.png"
          alt=""
        />
        <img
          className={`doodle ${styles.doodle} ${styles.yellowsquig}`}
          src="./images/yellowsquig.png"
          alt=""
        />
      </div>
    </div>
  );
}
