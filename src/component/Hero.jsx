import React from 'react'
import Navbar from "../component/Navbar"

const Hero = () => {

  return (
    <section className="bg-[url('../public/img/section2.jpg')] bg-cover h-screen relative overflow-y-hidden" >
       <Navbar/>
       <div className='flex flex-col justify-around h-dvh w-auto px-10'>
        <div className=''>
            <p className='flex font-hello text-white/55 font-black text-7xl'>The Journey to <br /> a Perfecton</p>
        </div>
        <div className=''>
            <p className='flex justify-end text-3xl text-white/55'>Top performance requires <br />more than perfect conditions <br />especially just luck</p>
        </div>
       </div>

    </section>
  )
}

export default Hero