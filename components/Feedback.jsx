import React from 'react'
import styles from '../styles/Feedback.module.css'


export default function Feedback() {
  return (
    <div className={styles.feedback}>
        <h2>Like your results? Let us know!</h2>
        <div className={styles.buttonWrapper}>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    </div>
  )
}
