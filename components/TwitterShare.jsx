import React, { useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import encodeUrl from "encodeurl";
import personalityIcons from "../public/icons.json";
import styles from "../styles/TwitterShare.module.css";

const CHARISMA_TWITTER_NAME = "Charisma_Social";
const WAITLIST_SIGNUP_LINK = "https://bit.ly/3LnB414";
const TWITTER_URL = "https://twitter.com/intent/tweet";

const TwitterShare = () => {
  const { address, searchAddr, wpi } = useContext(Web3Context);
  const [personalityString] = Object.keys(wpi["6"]);
  let tweetText = "";
  let encodedText = "";
  const iconText =
    personalityString !== "NGMI" ??
    personalityString.split("").reduce((iconString, trait) => {
      iconString += personalityIcons[trait];
      return iconString;
    }, "");

  if (address === searchAddr) {
    tweetText = `My wallet personality type is ${personalityString} ${iconText}! @${CHARISMA_TWITTER_NAME} What does your wallet say about you?\nJoin waitlist here: ${WAITLIST_SIGNUP_LINK}`;
  } else {
    tweetText = `I just analyzed wallet personalities with @${CHARISMA_TWITTER_NAME}, the world's first wallet personality test.\nJoin waitlist here: ${WAITLIST_SIGNUP_LINK}`;
  }
  encodedText = encodeUrl(tweetText);

  return (
    <div className={styles.share}>
      <div className={styles.shareText}>Share your result to Twitter!</div>
      <a
        href={`${TWITTER_URL}?text=${encodedText}`}
        target="_blank"
        rel="noreferrer"
      >
        <button className={`btn-secondary ${styles.shareBtn}`}>
          <img
            className={styles.twitterLogo}
            src="./images/TwitterLogoWhite.svg"
          />{" "}
        </button>
      </a>
    </div>
  );
};

export default TwitterShare;
