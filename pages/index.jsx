import React, { useState, useEffect, useRef } from 'react'

import { gsap, Power1 } from 'gsap'
import Hero from '../components/Hero'



export default function Home() {
  

  
  useEffect(() => {

    const fadeInTl = gsap.timeline()
      fadeInTl.from("body > *", {
        opacity: 0,
        duration: 1
      })

    const doodles = gsap.utils.toArray(".doodle")
    // console.log(doodles);
    

    doodles.forEach((doodle, idx) => {
      const num = Math.random(idx)
      const floatTl = gsap.timeline({repeat:-1, repeatDelay: 0});
      floatTl.to(doodle, {
        y:'+=5',
        // x:'-=20',
        // rotation:"-=5", 
        ease: Power1.easeInOut,
        duration: 3 + num,
      })
      .to(doodle, {
        y:'-=5', 
        // x:'+=20', 
        // rotation:'+=5', 
        ease: Power1.easeInOut,
        duration: 2 + num,
      })


    });
  }, []);

  return (
    <div>
      <main className="container">
        <Hero /> 
      </main>
    </div>
  )
}
