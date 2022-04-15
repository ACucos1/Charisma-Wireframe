import { useState, useRef, useEffect } from 'react'
import { ethers, Contract, providers } from 'ethers'
import { Web3Context } from '../contexts/Web3Context';
import Web3Modal from 'web3modal'
import Authereum from "authereum";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const [walletConnected, setWalletConnected] = useState(false)
  const [address, setAddress] = useState(null)
  const [signer, setSigner] = useState(false)
  const [searchAddr, setSearchAddr] = useState(null)

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
    await connectWallet()
  }


  // useEffect(() => {
  //   if(signer?.on){
  //     const handleAccountsChanged = (accounts) => {
  //       if(accounts) 
  //         setAddress(accounts[0])
  //     }

  //     signer.on("accountsChanged", handleAccountsChanged)
  //   }

  //   return () => {
  //     if(signer.removeListener){
  //       signer.removeListener("accountsChanged", handleAccountsChanged)
  //     }
  //   }
  // }, [signer])
  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on("accountsChanged", (accounts) => {
        setAddress(accounts[0])
      })
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Charisma</title>
        <meta name="description" content="Wallet Personality Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3Context.Provider value={{handleConnectClick, address, signer, searchAddr, setSearchAddr}}>
        <Navbar />
        <Component {...pageProps }/>
        {pathname !== '/' ? <Footer /> : <></>}
      </Web3Context.Provider>
      
    </>
  )
}

export default MyApp
