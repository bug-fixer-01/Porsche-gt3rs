import { footer, li, ul } from 'framer-motion/client'
import React, { useState } from 'react'
import { navigationList, otherPages, socials } from '../constants'
import { scrollToSection, validateEmail } from '../helper'
import toast from 'react-hot-toast'
import { LuArrowUpRight } from "react-icons/lu";

const Footer = () => {
  const [mail, setMail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(mail)) {
      toast.error("invalid email")
      return
    }
    toast.success("subscribed")
  }
  return (
    <footer id='footer' className='h-full relative overflow-hidden'>

      <span className='absolute -z-10 text-zinc-200 h-full w-full text-center bg-zinc-100 font-semibold text-[10rem] sm:text-[20rem]'>GT 3 RS</span>

      <div className='px-10 pt-10 pb-5'>
        <div className='grid sm:grid-cols-2 mb-20'>
          <div className='grid grid-cols-3 max-sm:-mx-5'>
            <div className='flex items-center flex-col'>
              <h2 className='text-xl max-sm:text-sm font-semibold mb-3'>Navigation</h2>
              <ul className='flex-center flex-col'>
                {navigationList.map((list, i) => (
                  <li key={i} className='text-sm max-sm:text-xs py-1 cursor-pointer'>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex-center flex-col'>
              <h2 className='text-xl max-sm:text-sm font-semibold mb-3'>Other Pages</h2>
              <ul className='flex-center flex-col'>
                {otherPages.map((list, i) => (
                  <li key={i} className='text-sm max-sm:text-xs py-1 cursor-pointer'>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center flex-col'>
              <h2 className='text-xl max-sm:text-sm font-semibold mb-3'>Social Media</h2>
              <ul className='flex-center flex-col'>
                {socials.map((list, i) => (
                  <li key={i} className='text-sm max-sm:text-xs py-1 cursor-pointer'>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='sm:px-30 max-sm:mt-10'>
            <div className='mb-5'>
              <h2 className='text-xl font-semibold mb-3'>Subscribe to Our Newsletter</h2>
              <span className='text-sm'>stay up-to-date with Porsche latest tech news,products launch, and other cool thing - all delivered in your inbox.</span>
            </div>
            <form onSubmit={handleSubmit} className='flex gap-4 flex-col'>
              <div className='relative'>
                <input type="text" placeholder='Enter your email' value={mail} onChange={({ target }) => setMail(target.value)} className=' outline-none py-2 w-full peer' />
                <span className="absolute left-0 bottom-0 h-[1.2px] w-full bg-black/35 scale-x-0 origin-center transition-transform duration-300 peer-focus:scale-x-100 peer-hover:scale-x-100"></span>
              </div>

              <button type='submit' className='p-2 w-24 bg-black text-white rounded-3xl'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
              <p className='max-sm:text-xs'>Terms & Conditions</p>
              <p className='max-sm:text-xs'>Privacy Policy</p>
          </div>
          <div>
              <p className='max-sm:text-xs'>&copy; 2025 Porsche Cars North America. Inc.</p>
          </div>
          <div className='flex-center max-sm:hidden gap-1'>
               <span className='p-2  border-2 rounded-3xl'>BACK TO TOP</span>
               <span onClick={()=> scrollToSection("Hero")} className='border-2 cursor-pointer roudned-full flex-center rounded-full text-2xl p-2'><LuArrowUpRight /></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer