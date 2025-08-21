import React from 'react'
import { PiWindLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Details = () => {
    useGSAP(() => {
        gsap.from("#details", { y: 100, opacity: 0, duration: 0.5,delay:0.4, scrollTrigger: { trigger: '#detail' },stagger:0.2, ease: "power1.out" })
        gsap.from("#image",{y:600 , duration:2 ,delay:0.3 , opacity:0.1, scrollTrigger:{ trigger:'#details'},ease:"expo.out"})
    })

    return (
        <section id='detail' className='h-screen mb-10 sm:px-20 px-6 py-10 relative overflow-y-hidden'>
            <div id='details' className='flex justify-between items-center'>
                <div className='px-4 py-1 font-bold font-details border-2 rounded-3xl'>
                    UPDATES
                </div>
                <span>02/<b>details</b></span>
            </div>
            <div className='grid xl:grid-cols-2 h-full pt-4 max-xl:gap-15'>
                <div className=' h-full'>
                    <div className='flex flex-col h-[45%] justify-between mb-6'>
                        <span id='details' className='lg:text-5xl text-4xl flex font-semibold '>Because the biggest challenge is to remain unbeatable.</span>

                        <span id='details' className='sm:text-xl text-lg font-medium'>
                            Discover the 911 GT3 RS in details.
                        </span>
                    </div>
                    <hr id='details'/>
                    <div className='flex gap-10'>
                        <div id='details' className='w-1/2 pt-10 flex flex-col gap-3'>

                            <PiWindLight className='text-6xl text-red-600' />

                            <h2 className='text-2xl font-details font-semibold mt-5'>Downforce</h2>
                            <span className='max-sm:text-sm'><span className='font-medium'>The new 911 GT3 RS is set up for performance - </span>thanks to increased downforce and revised aerodynamics by Porsche Active Aerodynamics </span>
                        </div>
                        <div id='details' className='w-1/2 pt-10 flex flex-col gap-3'>
                            <IoCarSportOutline className='text-6xl text-red-600' />
                            <h2 className='text-2xl font-details font-semibold mt-5'>Comfortable</h2>
                            <span className='max-sm:text-sm'><span className='font-medium'>The new 911 GT3 RS remains true to this motorsport philosophy - </span>despite the significantly expanded and further improved equipment</span>
                        </div>
                    </div>
                </div>
                <div id='image' className=' 2xl:pl-34 2xl:pb-5 max-xl:hidden opacity-100'>
                    <div className="bg-[url('/img/details2.jpg')]  bg-cover h-full overflow-hidden rounded-xl relative ">
                        <div className='w-56 flex flex-col gap-5 backdrop-blur-lg bg-white/15 absolute bottom-3 p-2 rounded-xl inset-x-5'>
                            <p className='text-white font-medium'>"With its mulitple of sporty design features and technical details - <span className='font-thin text-sm'>911 GT3 RS is perfectly matched to its motorized role models</span></p>
                            <span className='font-semibold text-white font-details'>- Oliver Blume</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Details