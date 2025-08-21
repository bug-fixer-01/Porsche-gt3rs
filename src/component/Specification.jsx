import React, { useState } from 'react'
import { specLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Specs from './Specs'

const Specification = () => {
    useGSAP(() => {

        gsap.from("#specs1", { y: 100, opacity: 0, duration: 0.5, scrollTrigger: { trigger: '#specs' }, stagger: 0.3, ease: "power1.out" })

        gsap.from("#specs", { y: 300, opacity: 0, delay: 0.5, duration: 0.5, scrollTrigger: { trigger: '#specs' }, stagger: 0.1 })

    })

    return (
        <section id='specification' className='h-full xl:px-20 px-6 py-10 bg-zinc-100 overflow-y-hidden'>
            <div id="specs1" className='flex max-lg:flex-col max-sm:gap-3 justify-between lg:items-center'>
                <span>03/<b>Specification</b></span>
                <span className='sm:text-xl font-semibold'>Discover the 911 GT3 RS in details about the individual chapters.</span>
            </div>
            <hr id='specs1' className='sm:mt-10 mt-5' />
            <div className='h-auto'>
                {specLists.map((specs,index) => (
                  <Specs
                    key={index}
                    specs = {specs}
                  />
                ))}
            </div>
        </section>
    )
}

export default Specification