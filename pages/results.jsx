import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ResultCard from '../components/ResultCard'
import LoadingSpinner from '../components/LoadingSpinner'
import styles from '../styles/Results.module.css'

export default function Results() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <main className="container"> 
      {loading ? 
      <LoadingSpinner /> 
      :
      <>
        <div className={styles.Results}>
          <h1>Sweet, Thanks. <br /> The results are in.</h1>
          <p className={styles.Text}>Your wallet personality type is <h1 className={styles.Type}>DEOS</h1></p>

          <div className={styles.ShareWrapper}>
              <div className={styles.ShareText}>
                  I’m a DEOS 💎🌅📈🍼 → Charisma.xyz
              </div>
              <button className="btn-primary">Share</button>
          </div>

          <div className="ResultCards">
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
        <div className={styles.Mint}>
          <button className={`btn-secondary`}>Connect Wallet to Mint</button> 
        </div> 
      </>  
      }
    </main>
  )
}
