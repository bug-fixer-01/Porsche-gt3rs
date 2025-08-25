import Navbar from "../component/Navbar"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Hero = ({ animate }) => {
  useGSAP(() => {
    if (animate) {
      gsap.to("#heading", { delay: 2, duration: 2, opacity: 1, ease: "expo.out" })
      gsap.to("#hero-footer", { opacity: 1, duration: 2, delay: 2.5 , ease: "expo.out" })
    }
  }, [animate])

  return (
    <section id='Hero' className="bg-[url('/img/section2.avif')] bg-cover h-screen relative overflow-y-hidden" >
      <Navbar />
      <div className='flex flex-col justify-between py-10 h-full sm:px-10 px-5'>
        <div className='mt-15'>
          <p id="heading" className='font-details opacity-0 text-black/35 font-black text-3xl sm:text-7xl'>The Journey to  a <b className='font-hello max-sm:text-4xl text-white'>PERFECTION</b></p>
        </div>
        <div className='flex justify-between max-sm:flex-col'>
          <p id='hero-footer' className='text-white opacity-0 hidden sm:block lg:mt-10'><b className='font-bold'>Experience the new <span className='font-hello'>911 GT3 RS</span> in top form </b>  <br /> <span className='font-thin'> - with increased race track performance</span></p>
          <p id='hero-footer' className='sm:text-2xl opacity-0 text-lg sm:text-end text-white/65'>Top <b className='font-hello text-white'>performance</b> requires <br />more than perfect conditions <br />especially just luck.</p>
          <p id='hero-footer' className='text-white opacity-0 block sm:hidden text-xs mt-5 lg:mt-10'><b>Experience the new <span className='font-hello text-xs'>911 GT3 RS</span> in top form </b><br /> <span className='font-thin'> - with increased race track performance</span></p>
        </div>
      </div>

    </section>
  )
}

export default Hero