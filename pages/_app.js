import { useState, useRef, useEffect } from 'react'
import { ethers, Contract, providers } from 'ethers'
import { Web3Context } from '../contexts/Web3Context';
import axios from 'axios'
const crypto = require("crypto")
import Web3Modal from 'web3modal'
import Authereum from "authereum";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import '../styles/globals.css'

const apiUrl = "https://api.charismasocial.xyz"

axios.interceptors.request.use(config => {
  const {origin} = new URL(config.url);
  const allowedOrigins = [apiUrl];
  const token = localStorage.getItem('token');
  if(allowedOrigins.includes(origin)){
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
},
err => {
  return Promise.reject(err);
})


function MyApp({ Component, pageProps }) {
  
  const storedJwt = null;
  const { pathname } = useRouter()
  const [walletConnected, setWalletConnected] = useState(false)
  const [address, setAddress] = useState("")
  const [signer, setSigner] = useState(false)
  const [searchAddr, setSearchAddr] = useState("")
  const [signInAddr, setSigninAddr] = useState("")
  const [jwtToken, setJwtToken] = useState(storedJwt || null)
  const [wpi, setWpi] = useState({})


  const getJwt = async () => {
    const headers =  {
      'Content-Type': 'application-x-www-form-urlencoded'
    }
    const loginFormData = new FormData();
    loginFormData.append("username", "charisma")
    loginFormData.append("password", "password");

    const { data } = await axios.post(`${apiUrl}/token`, loginFormData, {headers});
    window.localStorage.setItem("token", data.access_token)
    setJwtToken(data.access_token)
    console.log(data.access_token);
  }

  const getWpi = async(addr) => {
    try {
      const { data } = await axios.post(`${apiUrl}/analyze/${addr}`)
      setWpi(data)
      console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }

  const web3ModalRef = useRef()


  
  const getSigner = async () => {
    const provider = await web3ModalRef.current.connect()
    console.log(provider);
    const web3Provider = new providers.Web3Provider(provider)

    const { chainId } = await web3Provider.getNetwork()
    if(chainId != 4){
      alert("Please Connect To Rinkeby")
      throw new Error("Please Connect To Rinkeby")
    }
    
    const signer = web3Provider.getSigner()
    return signer;
  }

  const connectWallet = async () => {
    try {
      const signer = await getSigner()
      const address = await signer.getAddress()
      setSigner(signer)
      setAddress(address)
      setWalletConnected(true)
    }
    catch(err){
      console.log(err);
    }

  }

  const handleSignedinClick = () => {
    setSigninAddr(address)
  }



  const handleConnectClick = async() => {
    if(!walletConnected){
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {
          authereum: {
            package: Authereum
          }
        },
        disableInjectedProvider: false,
        cacheProvider: true
      })
    }
    if(!address){
      await connectWallet()
    }
    else {
      handleSignedinClick()
    }
  }

  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on("accountsChanged", (accounts) => {
        setAddress(accounts[0])
      })
    }
    const jwt = localStorage.getItem('token')
    if(jwt){
      setJwtToken(jwt)
    }
    else {
      getJwt()
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Charisma</title>
        <meta name="description" content="Wallet Personality Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3Context.Provider value={{handleConnectClick, address, signer, searchAddr, setSearchAddr, signInAddr, jwtToken, setJwtToken, getWpi}}>
        <Navbar />
        <Component {...pageProps }/>
        {pathname !== '/' ? <Footer /> : <></>}
      </Web3Context.Provider>
      
    </>
  )
}

export default MyApp
