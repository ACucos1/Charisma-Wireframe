import styles from "../styles/Results.module.css";
import React, { useContext } from "react";
import { Web3Context } from "../contexts/Web3Context";
import encodeUrl from "encodeurl";

const personailtyFromWpi = (wpi) =>
  Object.keys(wpi).reduce((personalityString, key) => {
    const value = wpi[key].info.Value;
    if (value.length === 1) {
      personalityString += value;
    }
    return personalityString;
  }, "");

const CHARISMA_TWITTER_NAME = "Charisma_Social";
const WAITLIST_SIGNUP_LINK =
  "https://docs.google.com/forms/d/1gyKQujDEzvdDRmB9ZqcOWEGXUvlrB08BWVY-CcbsW6g/edit?usp=drive_web";
const TWITTER_URL = "https://twitter.com/intent/tweet";

const TwitterShare = () => {
  const { address, searchAddr, wpi } = useContext(Web3Context);
  const personalityString = personailtyFromWpi(wpi);
  let tweetText = "";
  let encodedText = "";

  if (address === searchAddr) {
    tweetText = `I just used Charisma @${CHARISMA_TWITTER_NAME} (the world's first wallet personality test) for my wallet. The result is ${personalityString}! 💎🌅📈🍼.\n Waitlist to join: ${WAITLIST_SIGNUP_LINK}`;
  } else {
    tweetText = `I just used Charisma @${CHARISMA_TWITTER_NAME} (the world's first wallet personality test).\n Waitlist to join: ${WAITLIST_SIGNUP_LINK}`;
  }
  encodedText = encodeUrl(tweetText);

  return (
    <div className={styles.share}>
      <div className={styles.shareText}>{tweetText}</div>
      <button className={`btn-secondary ${styles.shareBtn}`}>
        <a href={`${TWITTER_URL}?text=${encodedText}`}>Share</a>
      </button>
    </div>
  );
};

export default TwitterShare;
