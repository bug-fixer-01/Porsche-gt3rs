import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { LuArrowDownRight } from "react-icons/lu";

const Specs = ({specs}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="specs" key={specs.id}>
            <div className='flex items-center justify-between py-7'>
                <div className='flex-center 2xl:gap-[10rem]'>
                    <span className=''>{specs.id}</span>
                    <span className='text-xl 2xl:text-5xl'>{specs.spec}</span>
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className={`w-10 h-10 cursor-pointer ${isOpen ? "bg-red-600" : "bg-black"} rounded-full flex-center text-white`}>
                    
                    {isOpen ? <IoMdClose className='text-xl'/> : <LuArrowDownRight />}
                </div>
            </div>
            <div className={`${isOpen ? "max-h-[40rem]" : "max-h-0 "} flex-center overflow-hidden duration-300 transition-all ease-in-out`}>
                <img src={specs.img} alt="car" className='select-none object-cover'/>
            </div>
            <hr />
        </div>
    )
}

export default Specs