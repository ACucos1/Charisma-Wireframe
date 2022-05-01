import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../contexts/Web3Context";
import Badge from "../components/Badge";
import styles from "../styles/Hero.module.css";
import Router from "next/router";
import PasswordModal from "./PasswordModal";

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
    resolveEnsDomain,
    setWpi,
  } = useContext(Web3Context);
  const [err, setErr] = useState("");
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchAddr(e.target.value);
  };

  const startSearch = (query) => {
    setWpi({});
    startWpi(query)
      .then((status) => {
        console.log(status);
        if (status === 200 || status === 201 || status === 302) {
          setSearchStarted(true);
          if (searchAddr) {
            Router.push("/results");
          }
        }
      })
      .catch(({ err, text }) => {
        console.log("Error: ", err, text);
        setSearchAddr("");
        setErr(`${text}`);
        setTimeout(() => {
          setErr("");
        }, 5000);
      });
  };

  const handleSearch = () => {
    if (searchAddr) {
      if (searchAddr.length != 42 || searchAddr.match(/\s/)) {
        resolveEnsDomain(searchAddr).then((addr) => {
          // console.log(addr);
          setSearchAddr(addr);
          startSearch(addr);
        });
      } else {
        startSearch(searchAddr);
      }
    }
  };

  useEffect(() => {
    setSearchAddr("");
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
          placeholder="ENS or ETH address"
        />
        <button
          className={`btn-secondary ${styles.searchBtn}`}
          onClick={handleSearch}
        >
          Find out
        </button>
      </div>
      {err ? (
        <div className={styles.error}>{err}</div>
      ) : (
        <div className={styles.placeHolder}></div>
      )}
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
    </div>
  );
}
