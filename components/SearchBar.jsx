import React from 'react'
import styles from '../styles/SearchBar.module.css'

export default function SearchBar({searchAddr, handleSearchChange, handleSearch}) {
  return (
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
  )
}
