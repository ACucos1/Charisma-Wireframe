import React, { useEffect, useState, useContext } from 'react'
import ResultDisplay from '../components/ResultDisplay'
import LoadingSpinner from '../components/LoadingSpinner'
import { Web3Context } from '../contexts/Web3Context'
import styles from '../styles/Results.module.css'
import Router from 'next/router'

export default function Results() {
  const [loading, setLoading] = useState(true)
  const {handleConnectClick, address, searchAddr, setSearchAddr} = useContext(Web3Context)
  
  const handleWhitelistClick = () => {
    if(!address){
      handleConnectClick()
    }
    console.log(searchAddr, address);
  }


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    if(!address && !searchAddr){
      Router.push("/")
    }
  }, [])

  useEffect(() => {
    if(!searchAddr)
      setSearchAddr(address)
  }, [address, setSearchAddr])


  return (
    <main className={`container ${styles.results}`}> 
      {loading ? 
      <LoadingSpinner /> 
      :
      <>
         
         <div className={styles.resultsWrapper}>
           
           <ResultDisplay result={null}/>
           <div className={styles.resultExplanation}>
            <h2>The results are in. <br/> Your wallet personailty Type is</h2>
            <h1 className={styles.wpi}>
              <span className={styles.trait1}>D</span>
              <span className={styles.trait2}>E</span>
              <span className={styles.trait3}>O</span>
              <span className={styles.trait4}>F</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Consequat ultrices dolor eu quis velit tempor. 
              Amet justo, sit vulputate turpis tempor. Sagittis, bibendum egestas mauris malesuada eget. 
              Aliquet nullam mauris ante nisi, felis ultrices. Morbi facilisi tellus nibh blandit. 
              Donec elit cum morbi ut sapien varius suscipit suspendisse urna.
            </p>
           </div>
         </div>
         <div className={styles.interactWrapper}>
          <button className={`btn-secondary ${styles.mintBtn}`} onClick={handleWhitelistClick}>{address ? "Verify your address and join the whitelist" : "Connect Wallet to Verify"}</button>
          <div className={styles.share}>
            <div className={styles.shareText}>I’m a DEOS 💎🌅📈🍼 → Charisma.xyz</div>
            <button className={`btn-secondary ${styles.shareBtn}`}>Share</button>
          </div>         
         </div>
         {(searchAddr && address && address.toLowerCase() !== searchAddr.toLowerCase()) && <div className={styles.errorWrapper}>
           <h3>The wallet you connected does not match the one we analyzed. <br /> 
                Try again with a different wallet.</h3>
         </div>}
          
      </>  
      }
    </main>
  )
}
