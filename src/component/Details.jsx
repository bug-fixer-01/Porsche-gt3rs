import React from 'react'
import { PiWindLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";

const Details = () => {
    return (
        <section className='h-screen px-20 max-sm:px-10 py-10 relative'>
            <div className='flex justify-between items-center'>
                <div className='px-4 py-1 font-bold font-details border-2 rounded-3xl'>
                    UPDATES
                </div>
                <span>02/<b>details</b></span>
            </div>
            <div className='grid sm:grid-cols-2 h-full pt-4 max-xl:gap-15'>
                <div className=' h-full'>
                    <div className='flex flex-col h-[45%] justify-between mb-6'>
                        <span className='lg:text-5xl text-4xl flex font-semibold '>Because the biggest challenge is to remain unbeatable.</span>

                        <span className='sm:text-xl text-lg font-medium'>
                            Discover the 911 GT3 RS in details.
                        </span>
                    </div>
                    <hr />
                    <div className='flex gap-10'>
                        <div className='w-1/2 pt-10 flex flex-col gap-3'>

                            <PiWindLight className='text-6xl text-red-600' />

                            <h2 className='text-2xl font-details font-semibold mt-5'>Downforce</h2>
                            <span className='max-sm:text-sm'><span className='font-medium'>The new 911 GT3 RS is set up for performance - </span>thanks to increased downforce and revised aerodynamics by Porsche Active Aerodynamics </span>
                        </div>
                        <div className='w-1/2 pt-10 flex flex-col gap-3'>
                            <IoCarSportOutline className='text-6xl text-red-600' />
                            <h2 className='text-2xl font-details font-semibold mt-5'>Comfortable</h2>
                            <span className='max-sm:text-sm'><span className='font-medium'>The new 911 GT3 RS remains true to this motorsport philosophy - </span>despite the significantly expanded and further improved equipment</span>
                        </div>
                    </div>
                </div>
                <div className=' 2xl:pl-34 2xl:pb-5 max-sm:hidden'>
                    <div  className="bg-[url('/img/details.jpg')] bg-center bg-cover h-full overflow-hidden rounded-xl relative ">
                        <div className='w-auto flex flex-col gap-5 backdrop-blur-lg bg-black/15 absolute bottom-3 p-2 rounded-xl inset-x-5'>
                            <p className='text-white font-medium'>"With its mulitple of sporty design features and technical details - <span className='font-thin text-sm'>911 GT3 RS is perfectly matched to its motorized role models</span></p>
                            <span className='font-semibold text-white font-details'>- Oliver Blume</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full absolute left-0 2xl:pl-35 sm:hidden'>
                <div className='h-full relative'>
                    <img src="/img/details.jpg" alt="porsche" />
                    <div className='w-auto flex flex-col gap-5 backdrop-blur-md bg-black/25 absolute bottom-4 p-5 rounded-xl mx-3'>
                        <p className='text-white font-medium'>"With its mulitple of sporty design features and technical details - <span className='font-thin text-sm'>911 GT3 RS is perfectly matched to its motorized role models</span></p>
                        <span className='font-semibold text-white font-details '>- Oliver Blume</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details