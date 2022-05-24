import { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import { Web3Context } from "../contexts/Web3Context";
import { useRouter } from 'next/router'

export default function Address() {
  const router = useRouter();
  const { startWpi, setSearchStarted, setAddress, setSearchAddr } = useContext(Web3Context);
  const { address } = router.query;
  

  useEffect(() => {
    startWpi(address)
    setAddress(address)
    setSearchAddr(address)
    setSearchStarted(true)
  }, [])
  return (
    <div>Loading...</div>
  )
}
