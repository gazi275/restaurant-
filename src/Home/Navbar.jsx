import { Flowbite } from 'flowbite-react';
import image from "../assets/kokkari-logo-350.png"
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { MdClose } from "react-icons/md";



const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        
        <Flowbite>

<div className=''>
            

            <nav className=" border-gray-200 dark:bg-gray-900 sm:flex sm:items-center sm:justify-between px-8 "  >
                <div className="md:mx-auto  p-4 border-red-700">
                  <img className='w-3/4' src={image} alt=""  /> 
                   
                </div>
                <div onClick={()=>setOpen(!open)} className='md:hidden absolute  right-8 top-9 text-3xl'>
                {open?<div> <MdClose /></div> : <div ><IoMenu /></div> }
                </div>
            </nav>
            <nav className=" dark:bg-gray-700 md:bg-inherit bg-[#543100]  ">
                <div className="max-w-screen-xl px-4 py-3 lg:mx-auto   ">
                    <div className="flex items-center justify-center  ">
                        <ul className={`flex md:static  relative flex-col md:flex-row md:flex-nowrap font-medium mt-0 md:gap-10 md:w-auto w-full  text-sm   ${open? 'top-2':'hidden'}` }  >
                            <li className=' border-1  border-white '>
                                <a href="#" className="md:text-gray-900 text-white text-2xl font-display  dark:text-white hover:underline" >HOME</a>
                            </li>

                           
                            <li>
                                <a href="#" className="md:text-gray-900 text-white text-2xl  font-display dark:text-white hover:underline">ABOUT</a>
                            </li> 
                            
                            <li> 
                                <a href="#" className="md:text-gray-900 text-white text-2xl font-display dark:text-white hover:underline">CUISINE</a>
                            </li> 
                            <li> 
                                <a href="#" className="md:text-gray-900 text-white text-2xl font-display dark:text-white hover:underline">MENUS</a>
                            </li> 
                            <li> 
                                <a href="#" className="md:text-gray-900 text-white text-2xl font-display dark:text-white hover:underline">RESERVATIONS</a>
                            </li> 
                            <li> 
                                <a href="#" className="md:text-gray-900 text-white  text-2xl font-display dark:text-white hover:underline">PRIVATE DINING</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
            
                    </div>
   
   
 </Flowbite>
    );
};

export default Navbar;