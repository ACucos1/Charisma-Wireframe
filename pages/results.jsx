import React, { useEffect, useState, useContext, useRef } from "react";
import ResultDisplay from "../components/ResultDisplay";
import LoadingSpinner from "../components/LoadingSpinner";
import { Web3Context } from "../contexts/Web3Context";
import styles from "../styles/Results.module.css";
import Router from "next/router";
import TwitterShare from "../components/TwitterShare";
import Feedback from "../components/Feedback";
import JoinDiscord from "../components/JoinDiscord";
import ConnectWallet from "../components/ConnectWallet";
import ResultsExplanation from "../components/ResultsExplanation";
import Metrics from "../components/Metrics";
import CelebTwin from "../components/CelebTwin";

export default function Results() {
  const [loading, setLoading] = useState(true);
  const { handleConnectClick, address, searchAddr, setSearchAddr, wpi } =
    useContext(Web3Context);

  const handleWhitelistClick = () => {
    if (!address) {
      handleConnectClick();
    }
    // console.log(searchAddr, address);
  };

  useEffect(() => {
    let seconds = 0;
    const checkWpiInterval = setInterval(() => {
      if (seconds >= 3) {
        setLoading(false);
        clearInterval(checkWpiInterval);
      }
      seconds += 0.5;
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!address && !searchAddr) {
      Router.push("/");
    }
  }, [address, searchAddr]);

  useEffect(() => {
    if (!searchAddr) setSearchAddr(address);
  }, [address, setSearchAddr, searchAddr]);

  return (
    <main className={`container ${styles.results}`}>
      {loading || !wpi["1"] ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2>
            We&apos;ve analyzed your wallet&apos;s on-chain data.
            <br /> Here are your results:
          </h2>
          <div className={styles.resultsWrapper}>
            <ResultDisplay wpi={wpi} />
            {/* <ResultsExplanation wpi={wpi} loading={loading}/> */}
            <Metrics wpi={wpi} />
            <CelebTwin wpi={wpi} />
            <div className={styles.interactWrapper}>
              <h2>Complete all 3 steps below to claim Charisma Alpha Role</h2>
              <ConnectWallet
                handleWhitelistClick={handleWhitelistClick}
                address={address}
              />
              <TwitterShare />
              <JoinDiscord />
            </div>
          </div>

          {address && address === searchAddr && <Feedback address={address} />}
          {searchAddr &&
            address &&
            address.toLowerCase() !== searchAddr.toLowerCase() && (
              <div className={styles.errorWrapper}>
                <h3>
                  The wallet you connected does not match the one we analyzed.
                  <br />
                  Try connecting with a different wallet.
                </h3>
              </div>
            )}
        </>
      )}
    </main>
  );
}
