import React from 'react'
import Image from 'next/image'
import styles from '../styles/LoadingSpinner.module.css'

export default function LoadingSpinner() {
  return (
    <div className={`${styles.Loading} full-screen`}>
        <Image className={styles.Hourglass} src="/images/hourglass.png" alt="loading..." height="128px" width="128px"/>
        <p>Loading...</p>
    </div>
  )
}
