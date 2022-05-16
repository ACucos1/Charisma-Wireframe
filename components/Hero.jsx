import { useContext, useEffect, useState } from "react";
import { Web3Context } from "../contexts/Web3Context";
import Badge from "../components/Badge";
import styles from "../styles/Hero.module.css";
import Router from "next/router";
import PasswordModal from "./PasswordModal";
import SearchBar from "./SearchBar";
import ImageOverlay from "./ImageOverlay";

export default function Hero() {
  const {
    address,
    searchAddr,
    setSearchAddr,
    signInAddr,
    startWpi,
    setSearchStarted,
    resolveEnsDomain,
    setWpi,
    err,
    setErr,
  } = useContext(Web3Context);
  const handleSearchChange = (e) => {
    // console.log(e.target.value);
    setSearchAddr(e.target.value);
  };

  const startSearch = (query) => {
    setWpi({});
    startWpi(query)
      .then((status) => {
        // console.log(status);
        if (status === 200 || status === 201 || status === 302) {
          setSearchStarted(true);
        }
      })
      .catch(({ err, text }) => {
        // console.log("Error: ", err, text);
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

      <SearchBar handleSearchChange={handleSearchChange} searchAddr={searchAddr} handleSearch={handleSearch}/>

      {err ? (
        <div className={styles.error}>{err}</div>
      ) : (
        <div className={styles.placeHolder}></div>
      )}
      <ImageOverlay />
    </div>
  );
}
