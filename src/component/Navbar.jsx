import React from 'react'
import { navLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
    useGSAP(()=>{
      gsap.from("#nav" ,{y:-50 , delay:1 , duration:2 , ease:"power4.out"})
    })

  return (
    <header id="nav" className='w-full py-5 px-15  flex items-center absolute'>
      <nav className='flex w-full '>
        <div className='flex-center max-sm:hidden'>
          {navLists.map((nav) => (
            <div key={nav} className='px-5'>
              {nav}
            </div>
          ))}
        </div>
        <span className='flex-center flex-1 text-black/65 font-porsche max-sm:text-xl text-3xl'>
          PORSCHE
        </span>

        <div className='flex-center relative gap-5 pr-10 max-sm:hidden'>
          <div className={` cursor-pointer p-2 px-4 rounded-3xl `}>
            Contact
          </div>
          <div className={`bg-white/15 border-white/20 border-[1px] cursor-pointer p-2 px-4 rounded-3xl `}>
            Subscribe
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar