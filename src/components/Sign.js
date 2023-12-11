import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='bg-blue-400 w-screen h-screen flex justify-center items-center'>
      <div className='border-2 border-black w-[40%] h-[60%]  rounded-2xl bg-white flex justify-center pt-9'> 
        <div className='flex flex-col w-full items-center justify-between pb-6 pt-8 text-xl font-medium'>
             
             <input type='email' placeholder='EMAIL ' className='w-[80%] border-2 border-black py-4 px-4 rounded-full ' />
             <input type='password' placeholder='PASSWORD' className='w-[80%] border-2 border-black py-4 px-4 rounded-full'/>

             <button className='w-[80%] border-2 bg-black text-white font-semibold py-4 px-4 rounded-full'>SIGN IN</button>
             <div className='text-gray-500'>
             
             <Link to={"../Login"}>  
             <button className='mr-8 text-xl hover:text-blue-800'>SIGN UP</button>

               </Link>


               <Link to={"./"}>
               <button className='text-xl  hover:text-blue-800'>SIGN IN</button>
               </Link>
               
             </div>
        </div>
       </div>
    </div>
  )
} 

export default Login
