import {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { LuArrowDownRight , LuArrowUpRight } from "react-icons/lu";

const Specs = ({specs}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSpan , setIsOpenSpan] = useState(false)
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
            <div style={{ backgroundImage: `url(${specs.img})` }} className={`${isOpen ? "h-[70vh] mb-5" : "h-0"}  rounded-xl flex-center bg-cover bg-center overflow-hidden duration-300 transition-all ease-in-out relative`}>
                <div className="p-5 absolute left-0 bottom-0 sm:w-1/2 w-full h-1/2 sm:h-full bg-gradient-to-t sm:bg-gradient-to-r from-black to-transparent rounded-b-xl text-white flex flex-col justify-end  gap-2 items-start">
                   <h1 className="text-3xl max-sm:text-xl font-semibold">Specification</h1>
                   <span onClick={()=>{setIsOpenSpan(!isOpenSpan)}} className="sm:text-sm hover:bg-white/15 p-2 rounded-lg flex justify-start items-center gap-2"> {isOpenSpan ? <LuArrowDownRight onClick={()=>{setIsOpenSpan(!isOpenSpan)}}/> : <LuArrowUpRight onClick={()=>{setIsOpenSpan(!isOpenSpan)}} />} {isOpenSpan ? "show less": "show more"}</span>
                   {isOpenSpan &&  <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit explicabo nemo sed commodi nulla obcaecati illo molestias. Maiores aliquam tenetur officia tempore ea repellat exercitationem architecto, debitis eligendi provident voluptate.</span>}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Specs