import React from 'react'
import Badge from '../components/Badge'
import styles from '../styles/Footer.module.css'


export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.Explanation}>
            <div className={styles.TextWrapper}>
                 <h2>See our methodology.</h2>
                 <p>
                    Who came up with these personality <br /> 
                    types? Why did we choose these<br />
                    traits? If you&apos;re curious, or have <br />
                    ideas for insights you&apos;d like to see <br />
                    about your own wallet, let us know.
                 </p>
            </div>
            <button className={`btn-secondary ${styles.learnMore}`}>LEARN MORE</button> 
        </div>
        

        <div className={styles.ContentWrapper}>
            <div className={styles.Content1}>
                <Badge />
            </div>

            <ul className={styles.footerNav}>
              <li>COMMUNITY</li>
              <li>METHODOLOGY</li>
              <li>TEAM</li>
              <li>DISCORD</li>
            </ul>
        </div>
    </div>
  )
}
