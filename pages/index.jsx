import { gsap, Power1 } from 'gsap'
import { useEffect, useState } from 'react' 
import Hero from '../components/Hero'
import LoadingSpinner from '../components/LoadingSpinner'
import Router from 'next/router'






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
