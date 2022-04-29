import { useState, useRef, useEffect } from "react";
import { ethers, Contract, providers } from "ethers";
import { Web3Context } from "../contexts/Web3Context";
import axios from "axios";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import "../styles/globals.css";

const apiUrl = "https://api.charismasocial.xyz";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function MyApp({ Component, pageProps }) {
  const storedJwt = null;
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [signer, setSigner] = useState(false);
  const [searchAddr, setSearchAddr] = useState("");
  const [signInAddr, setSigninAddr] = useState("");
  const [jwtToken, setJwtToken] = useState(storedJwt || null);
  const [wpi, setWpi] = useState({});
  const [searchStarted, setSearchStarted] = useState(false);
  const [ens, setEns] = useState(null);

  const getJwt = async () => {
    const headers = {
      "Content-Type": "application-x-www-form-urlencoded",
    };
    const loginFormData = new FormData();
    loginFormData.append("username", "charisma");
    loginFormData.append("password", "password");

    const { data } = await axios.post(`${apiUrl}/token`, loginFormData, {
      headers,
    });
    localStorage.setItem("token", data.access_token);
    setJwtToken(data.access_token);
    console.log("Jwt: " + data.access_token);
  };

  const startWpi = async (addr) => {
    try {
      const res = await axios.post(`${apiUrl}/analyze/${addr}`);
      return res.status;
    } catch (err) {
      // console.log(Object.keys(err));
      console.log(err.response.status, err.response.statusText);
      if (err.response.status === 403) {
        getJwt();
        throw {
          err: err.response.status,
          text: "Session Timed out. Please refresh the page and try again",
        };
      }
      if (err.response.status === 422) {
        throw { err: err.response.status, text: "Invalid ETH Address" };
      }
      throw { err: err.response.status, text: err.response.statusText };
      // setStatus(err.response.status)
    }
  };

  const getResult = async (addr) => {
    const { data } = await axios.get(`${apiUrl}/result/${addr}`);
    console.log(Object.keys(data).length);
    if (Object.keys(data).length > 1) setWpi(data);
    console.log(data);
  };

  const web3ModalRef = useRef();

  const resolveEnsDomain = async (ensDomain) => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/4573dc7eefa641249c73db4a48c47f87"
    );
    const resolvedAddr = await provider.resolveName(ensDomain);
    return resolvedAddr;
  };

  const getSigner = async () => {
    const provider = await web3ModalRef.current.connect();
    // console.log(provider);
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId != 1) {
      alert("Please Connect To Ethereum Mainnet");
    }

    const signer = web3Provider.getSigner();
    return signer;
  };

  const lookupEnsName = async (address) => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/4573dc7eefa641249c73db4a48c47f87"
    );
    const name = await provider.lookupAddress(address);
    if (name) {
      setEns(name);
    }
  };

  const connectWallet = async () => {
    try {
      const signer = await getSigner();
      const address = await signer.getAddress();
      setSigner(signer);
      setAddress(address);
      lookupEnsName(address);
      setWalletConnected(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignedinClick = () => {
    setSigninAddr(address);
  };

  const handleConnectClick = async () => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mainnet",
        providerOptions: {
          authereum: {
            package: Authereum,
          },
        },
        disableInjectedProvider: false,
        cacheProvider: true,
      });
    }
    if (!address) {
      await connectWallet();
    } else {
      handleSignedinClick();
    }
  };

  const handleDisconnect = () => {
    setWalletConnected(false);
    setAddress("");
    setEns("");
    setSigner(null);
  };

  useEffect(() => {
    if (searchStarted === true) {
      const resultCheckInterval = setInterval(async () => {
        const res = await axios.get(`${apiUrl}/result/${searchAddr}`);
        if (res.status === 200) {
          console.log(res);
          const data = await res.data;
          console.log(data);
          if (Object.keys(data).length > 1) {
            console.log("setting wpi");
            setWpi(data);
            clearInterval(resultCheckInterval);
          }
        }

        // await getResult(searchAddr)
      }, 1000);
      setSearchStarted(false);
    }
  }, [searchStarted, wpi, searchAddr]);

  useEffect(() => {
    console.log("UseEffect App.js: " + wpi);
  }, [wpi]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAddress(accounts[0]);
      });
    }
    const jwt = localStorage.getItem("token");
    if (jwt) {
      console.log("jwt from localStorage " + jwt);
      setJwtToken(jwt);
    } else {
      getJwt();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Charisma</title>
        <meta name="description" content="Wallet Personality Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3Context.Provider
        value={{
          handleConnectClick,
          address,
          signer,
          searchAddr,
          setSearchAddr,
          signInAddr,
          jwtToken,
          setJwtToken,
          startWpi,
          getResult,
          wpi,
          setSearchStarted,
          searchStarted,
          resolveEnsDomain,
          handleDisconnect,
          setWpi,
          ens,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        {/* {pathname !== '/' ? <Footer /> : <></>} */}
        <Footer />
      </Web3Context.Provider>
    </>
  );
}

export default MyApp;
