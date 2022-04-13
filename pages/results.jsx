import React, { useEffect, useState } from 'react'
import ResultDisplay from '../components/ResultDisplay'
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
    <main className={`container ${styles.results}`}> 
      {loading ? 
      <LoadingSpinner /> 
      :
      <>
         <h1>The results are in. <br/> Your wallet personailty Type is</h1>
         <div className={styles.resultsWrapper}>
           <ResultDisplay result={null}/>
           <div className={styles.resultExplanation}>
            <h1>DEOS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Consequat ultrices dolor eu quis velit tempor. 
              Amet justo, sit vulputate turpis tempor. Sagittis, bibendum egestas mauris malesuada eget. 
              Aliquet nullam mauris ante nisi, felis ultrices. Morbi facilisi tellus nibh blandit. 
              Donec elit cum morbi ut sapien varius suscipit suspendisse urna.
            </p>
            <div className={styles.share}>
              <div className={styles.shareText}>I’m a DEOS 💎🌅📈🍼 → Charisma.xyz</div>
              <button className={`btn-secondary ${styles.shareBtn}`}>Share</button>
            </div>
           </div>
         </div>
         
      </>  
      }
    </main>
  )
}
