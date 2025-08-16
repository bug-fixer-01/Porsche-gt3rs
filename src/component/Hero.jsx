import React from 'react'
import Navbar from "../component/Navbar"

const Hero = () => {

  return (
    <section className="bg-[url('../public/img/section2.jpg')] bg-cover h-screen relative overflow-y-hidden" >
       <Navbar/>
       <div className='flex flex-col justify-between py-10 h-dvh w-auto px-10'>
        <div className='mt-15'>
            <p className=' font-hello text-black/35 font-black text-7xl'>The Journey to <br /> a <b className=' text-white'>PERFECTION</b></p>
        </div>
        <div className='flex justify-between'>
            <p className='text-white lg:mt-10'><b className='font-bold'>Experience the new <span className='font-hello'>911 GT3 RS</span> in top form </b>  <br /> <span className='font-thin'> - with increased race track performance</span></p>
            <p className='text-3xl text-end text-white/65'>Top <b className='font-hello text-white'>performance</b> requires <br />more than perfect conditions <br />especially just luck.</p>
        </div>
       </div>

    </section>
  )
}

export default Hero