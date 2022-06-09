/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/CelebTwin.module.css";

export default function CelebTwin({ wpi }) {
  return (
    <div className={styles.resultDisplayWrapper}>
      <div className={styles.resultDisplay}>
        <div className={styles.celebContainer}>
          <div className={styles.celebItem}>
            {/* <img
              className={styles.celebText}
              src="/images/celebText.png"
              alt="My Charisma twin is"
            /> */}
            <h3>
              Your Celebrity <br /> Charisma twin is...{" "}
              <div className={styles.celebExplanation}>
                <img src='./images/infotooltip.svg' alt='info' />
                <div className={styles.celebExplanationTooltip}>
                  Calculated by finding the nearest wallet birthday of top ETH
                  Leaderboard wallets with your personality type
                </div>
              </div>
            </h3>
          </div>
          <div className={styles.celebItem}>
            <TwitterProfile twitterObj={wpi["7"]} />
          </div>
        </div>
        <img
          className={styles.swirl}
          id={styles.swirl1}
          src='/images/swirl1.png'
          alt='swirl'
        />
        <img
          className={styles.swirl}
          id={styles.swirl2}
          src='/images/swirl2.png'
          alt='swirl'
        />
        <img
          className={styles.swirl}
          id={styles.swirl3}
          src='/images/swirl3.png'
          alt='swirl'
        />
      </div>
    </div>
  );
}

const TwitterProfile = ({ twitterObj }) => {
  return (
    <div className={styles.twitterProfileContainer}>
      <div className={styles.twitterInnerProfileContainer}>
        <div className={styles.upperHalfBg}></div>
        <div className={styles.lowerHalfBg}>
          <div className={styles.twitterDetails} style={{ overflow: "hidden" }}>
            <div>
              <span className={styles.name}>
                {twitterObj && twitterObj.info.ensName}
              </span>
              {twitterObj && twitterObj.info.twitterIsVerified && (
                <img src='/images/verified.png' alt='verfied-tick' />
              )}
            </div>
            <span className={styles.username}>
              {twitterObj && twitterObj.info.twitterHandle}
            </span>
            <span style={{ fontSize: "12px", fontWeight: 300 }}>
              {twitterObj
                ? `${parseInt(
                    twitterObj.info.twitterFollowersCount
                  ).toLocaleString("en-US")} followers`
                : "Looks like you' a real OG!"}{" "}
            </span>
            <p>
              {twitterObj
                ? twitterObj.info.twitterBio
                : "We couldn't find a celeb with a similar result and wallet birthday to yours, congrats!"}
            </p>
          </div>
        </div>
        <img
          className={styles.avatar}
          src={
            twitterObj
              ? twitterObj.info.twitterProfileUrl
              : "./images/personplaceholder.png"
          }
          alt='avatar'
        />
      </div>
    </div>
  );
};
