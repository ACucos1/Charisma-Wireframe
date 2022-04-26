import React from "react";
import Image from 'next/image'
import styles from "../styles/Badge.module.css";

export default function Badge() {
  return (
    <div className={styles.Badge}>
      <Image className={styles.ethGlobal} src="/images/ethglobal.png" width="63" height="63"></Image>
      <h2>
        NFT Hack 2022 Finalist <br />
      </h2>
    </div>
  );
}
