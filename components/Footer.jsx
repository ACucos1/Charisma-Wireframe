import React from "react";
import Badge from "../components/Badge";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Explanation}>
        <div className={styles.TextWrapper}>
          <h2>What is Charisma?</h2>
          <p>
          What if we got to decide for ourselves who we wish to trust?  Charisma lays the groundwork for a more fair and open world by increasing transparency and context in how information is being used and interpreted.
          </p>
        </div>
          <a href="https://charisma-social.notion.site/What-is-Charisma-b292d5ea5a58479e99c578995948c2aa" target="_blank" rel="noreferrer">
            <button className={`btn-secondary ${styles.learnMore}`}>
              LEARN MORE
            </button>
          </a>
      </div>

      <div className={styles.ContentWrapper}>
        <div className={styles.Content1}>
          <Badge />
        </div>

        <ul className={styles.footerNav}>
          <li> 
            <a href="https://charisma-social.notion.site/Traits-Season-0-Alpha-f3787fed16614460a0bb69a898f16ef6" target="_blank" rel="noreferrer">
              LEARN ABOUT THE TRAITS
            </a>
          </li>
          <li>
              <a href="https://charisma-social.notion.site/Methodology-35d599c5f2bd4d01a91cb68a9a3084ba" target="_blank" rel="noreferrer">
                METHODOLOGY
              </a>
          </li>
          <li>
            <a href="https://charisma-social.notion.site/What-is-Charisma-b292d5ea5a58479e99c578995948c2aa" target="_blank" rel="noreferrer">
              ABOUT CHARISMA
            </a>
          </li>
          <li>
            <a href="https://discord.gg/7zuYcy4v2q" target="_blank" rel="noreferrer">
              DISCORD
            </a>  
          </li>
          <li>
            <a href="https://charisma-social.notion.site/Terms-of-Service-7e50659d332a4663ae5a18db6c92d9ac" target="_blank" rel="noreferrer">
              TERMS OF SERVICE
            </a>
          </li>
          <li>
            <a href="https://charisma-social.notion.site/Privacy-Policy-18fee02ed04f438e824d6b77f7064e48" target="_blank" rel="noreferrer">
              PRIVACY
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
