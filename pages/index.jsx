import { useEffect, useState } from 'react' 
import Hero from '../components/Hero'
import LoadingSpinner from '../components/LoadingSpinner'
import Router from 'next/router'


export default function Home() {
  
  return (
    <div>
      <main className="container">
        <Hero /> 
      </main>
    </div>
  )
}
