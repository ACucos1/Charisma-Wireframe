import React from 'react'
import styles from '../styles/ResultDisplay.module.css'


export default function ResultDisplay() {
  return (
    <div className={styles.resultDisplayWrapper}>
        <p className={styles.descriptionSmall}>=DIAMOND HANDS, EARLY ADOPTER, OVER PERFORMANCE, <br /> SMALL PROJECT SUPPORTER</p>
        <div className={styles.resultDisplay}>
            <div className={`${styles.cell}`}>
            D
            </div>
            <div className={`${styles.cell}`}>
            E
            </div>
            <div className={`${styles.cell}`}>
            O
            </div>
            <div className={`${styles.cell}`}>
            S
            </div>
        </div>
        <button className={`btn-secondary ${styles.mintBtn}`}>Mint this ➡️</button>
    </div>
    
  )
}
