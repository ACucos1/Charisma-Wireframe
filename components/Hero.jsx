
import { useContext, useEffect } from 'react'
import { Web3Context } from '../contexts/Web3Context'
import Badge from '../components/Badge'
import styles from '../styles/Hero.module.css'
import Router from 'next/router'
import truncateAddress  from '../utils.js'

export default function Hero() {
  const {handleConnectClick, address, searchAddr, setSearchAddr, signInAddr} = useContext(Web3Context);
  
  const handleSearchChange = (e) => {
    console.log(e.target.value)
    setSearchAddr(e.target.value)
  }

  const handleWalletSearch = async () => {
    await handleConnectClick()

    // console.log(address)
    setSearchAddr(address)
    setTimeout(() => {
      Router.push("/results")
    }, 500)
    //TODO: make api request
  }
  
  const handleSearch = () => {
    if(searchAddr)
      Router.push("/results")
  }

  useEffect(() => {
    setSearchAddr(null)
  }, [setSearchAddr])
  
  useEffect(() => {
    setSearchAddr(address)
  }, [signInAddr, setSearchAddr, address])

  return (
    <div className={`${styles.Hero} full-screen`}>
        <h1 className={styles.TagLine}>What does your wallet <br /> say about you?</h1>
        <p className={styles.Desc}>
            Charisma is a tool that analyzes your personality
            through your NFT holdings and onchain activity.
        </p>
        
        <div className={styles.bigConnect}>
          {/* <button className={`btn-secondary ${styles.connectBtn}`} onClick={handleWalletSearch}>{address != null ? truncateAddress(address) : "CONNECT WALLET TO FIND OUT"}</button> */}
        </div>
        {/* <span className={styles.Desc}>OR</span> */}
        <div className={styles.SearchWrapper}>
            <input className={styles.SearchInput} onChange={handleSearchChange} value={searchAddr} type="text" placeholder="ENS domain or Eth address" />
            <button className={`btn-secondary ${styles.searchBtn}`} onClick={handleSearch} >Find out</button>
        </div>
        <div className={styles.imagesWrapper}>
          <img className={`doodle ${styles.doodle} ${styles.bluesquig}`} src="./images/bluesquig.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.diamond}`} src="./images/diamond.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.foot}`} src="./images/foot.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.greensquig}`} src="./images/greensquig.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.pokerchip}`} src="./images/pokerchip.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.pot}`} src="./images/pot.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.star}`} src="./images/star.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.sunset}`} src="./images/sunset.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.toiletpaper}`} src="./images/toiletpaper.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.upchart}`} src="./images/upchart.png" alt="" />
          <img className={`doodle ${styles.doodle} ${styles.yellowsquig}`} src="./images/yellowsquig.png" alt="" />
        </div>
        
        
    </div>
  )
}
