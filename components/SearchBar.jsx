import React, { useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({
  searchAddr,
  handleSearchChange,
  handleSearch,
}) {
  const { walletConnected, handleConnectClick } = useContext(Web3Context);

  return (
    <div className={styles.SearchWrapper}>
      <input
        className={styles.SearchInput}
        onChange={handleSearchChange}
        value={searchAddr}
        type='text'
        placeholder='ENS or ETH address'
      />
      {walletConnected ? (
        <button
          className={`btn-secondary ${styles.searchBtn}`}
          onClick={handleSearch}>
          Find out
        </button>
      ) : (
        <button
          className={`btn-secondary ${styles.searchBtn}`}
          onClick={handleConnectClick}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
