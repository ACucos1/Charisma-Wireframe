import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [renderFooter, setRenderFooter] = useState(false)
  const { pathname } = useRouter()

  // useEffect(()=> {
  //   const { pathname } = router  
  //   if(pathname !== '/'){
  //     setRenderFooter(true)
  //   }
  //   else {
  //     setRenderFooter(false)
  //   }
  // }, [setRenderFooter])
  
  
  return (
    <>
      <Head>
        <title>Charisma</title>
        <meta name="description" content="Wallet Personality Analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      {pathname !== '/' ? <Footer /> : <></>}
    </>
  )
}

export default MyApp
