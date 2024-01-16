import { Flowbite } from 'flowbite-react';
import image from "../assets/kokkari-logo-350.png"


const Navbar = () => {
    return (
        
        <Flowbite>

<div >
            

            <nav className=" border-gray-200 dark:bg-gray-900"  >
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
                  <img src={image} alt=""  /> 
                   
                </div>
            </nav>
            <nav className=" dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 lg:mx-auto ">
                    <div className="flex items-center justify-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 text-2xl font-display  dark:text-white hover:underline" aria-current="page">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 text-2xl  font-display dark:text-white hover:underline">ABOUT</a>
                            </li> 
                            <li> 
                                <a href="#" className="text-gray-900  text-2xl font-display dark:text-white hover:underline">CUISINE</a>
                            </li> 
                            <li> 
                                <a href="#" className="text-gray-900  text-2xl font-display dark:text-white hover:underline">MENUS</a>
                            </li> 
                            <li> 
                                <a href="#" className="text-gray-900  text-2xl font-display dark:text-white hover:underline">RESERVATIONS</a>
                            </li> 
                            <li> 
                                <a href="#" className="text-gray-900   text-2xl font-display dark:text-white hover:underline">PRIVATE DINING</a>
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