import React, { useEffect, useState, useContext } from 'react'
import ResultDisplay from '../components/ResultDisplay'
import LoadingSpinner from '../components/LoadingSpinner'
import { Web3Context } from '../contexts/Web3Context'
import styles from '../styles/Results.module.css'
import Router from 'next/router'

export default function Results() {
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState({})
  const [selectedTrait, setSelectedTrait] = useState(1);
  const {handleConnectClick, address, searchAddr, setSearchAddr, wpi} = useContext(Web3Context)
  
  const handleWhitelistClick = () => {
    if(!address){
      handleConnectClick()
    }
    console.log(searchAddr, address);
  }

  // const handleTraitClick = () => {

  // }


  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false)
    // }, 2500)
    let seconds = 0;
    const checkWpi = setInterval(() => {
      if(wpi && seconds >= 3){
        setLoading(false)
        setResult(wpi)
        
        // console.log(wpi);
        clearInterval(checkWpi)
        
      }
      seconds+= 0.5
    }, 500)
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      const preview = setInterval(() => {
        setSelectedTrait(prev => {
          if(prev == 2){
            clearInterval(preview)
            return 1
          }
          else{
            return prev + 1
          }
        })
      }, 1000)
    }, 3000)
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
           
           <ResultDisplay wpi={wpi}/>
           <div className={styles.resultExplanation}>
            <h2>The results are in. <br/> Your wallet personailty Type is</h2>
            <h1 className={styles.wpi}>
              <span className={`${styles.trait} ${styles.trait1} ${selectedTrait === 1 && styles.selected}`} onClick={() => {setSelectedTrait(1)}}>{wpi && wpi["1"].info.Value}</span>
              <span className={`${styles.trait} ${styles.trait2} ${selectedTrait === 2 && styles.selected}`} onClick={() => {setSelectedTrait(2)}}>{wpi && wpi["2"].info.Value}</span>
              <span className={`${styles.trait} ${styles.trait3} ${selectedTrait === 3 && styles.selected}`} onClick={() => {setSelectedTrait(3)}}>{wpi && wpi["3"].info.Value}</span>
              <span className={`${styles.trait} ${styles.trait4} ${selectedTrait === 4 && styles.selected}`} onClick={() => {setSelectedTrait(4)}}>{wpi && wpi["4"].info.Value}</span>
            </h1>
            <p>
              {wpi && wpi[selectedTrait].info.Message}
            </p>
           </div>
         </div>
         <div className={styles.interactWrapper}>
          <button className={`btn-secondary ${styles.mintBtn}`} onClick={handleWhitelistClick}>{address ? "Prove your OG status" : "Connect to be Charisma OG"}</button>
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
