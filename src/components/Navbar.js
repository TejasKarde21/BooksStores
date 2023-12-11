

import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
    <div>
      
    </div>
    <div className='mx-14 h-[10vh] md:text-xl sm:text-sm '>
         <div className='flex justify-between px-[3%] py-2 border-black rounded-b-2xl  border-2'>
        <Link to={"/books/all"}> <div className='md:text-xl sm:text-sm  font-normal flex md:w-[35%] w-[50%] justify-between items-center' ><span className='font-bold text-2xl'><i className="fa-solid fa-book text-blue-900 mr-4" ></i>Book</span><span className='flex'><h1 className='bg-yellow-400 px-2 rounded-xl md:rounded-full py-1'>Home</h1><h1 className='ml-5 bg-yellow-300 px-4 py-1 rounded-xl md:rounded-full'>SHOPPING <i class="fa-solid fa-cart-shopping"></i> </h1></span></div></Link>   
          <Link to={"./Login"}>  <div className='bg-blue-600 w-[100%] rounded-2xl border-black border-2 flex justify-between items-center px-4 text-white text-xl md:text-2xl ' ><button className='py-3'>Sign up </button>
            <i class="fa-solid fa-arrow-right"></i>
               </div>
               </Link>
         </div>
    </div>
    </div>
  )
}

export default Navbar;
   