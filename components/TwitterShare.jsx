import styles from "../styles/Results.module.css";
import React, { useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import encodeUrl from "encodeurl";
import personalityIcons from "../public/icons.json";

const CHARISMA_TWITTER_NAME = "Charisma_Social";
const WAITLIST_SIGNUP_LINK =
  "https://docs.google.com/forms/d/1gyKQujDEzvdDRmB9ZqcOWEGXUvlrB08BWVY-CcbsW6g/edit?usp=drive_web";
const TWITTER_URL = "https://twitter.com/intent/tweet";

const TwitterShare = () => {
  const { address, searchAddr, wpi } = useContext(Web3Context);
  const [personalityString] = Object.keys(wpi["6"]);
  let tweetText = "";
  let encodedText = "";
  const iconText = personalityString.split("").reduce((iconString, trait) => {
    iconString += personalityIcons[trait];
    return iconString;
  }, "");

  if (address === searchAddr) {
    tweetText = `I just used Charisma @${CHARISMA_TWITTER_NAME} (the world's first wallet personality test) for my wallet. The result is ${personalityString}! ${iconText}.\nWaitlist to join: ${WAITLIST_SIGNUP_LINK}`;
  } else {
    tweetText = `I just used Charisma @${CHARISMA_TWITTER_NAME} (the world's first wallet personality test).\nWaitlist to join: ${WAITLIST_SIGNUP_LINK} ${iconText}`;
  }
  encodedText = encodeUrl(tweetText);

  return (
    <div className={styles.share}>
      <div className={styles.shareText}>{tweetText}</div>
      <button className={`btn-secondary ${styles.shareBtn}`}>
        <a href={`${TWITTER_URL}?text=${encodedText}`} target="_blank">
          Share
        </a>
      </button>
    </div>
  );
};

export default TwitterShare;
