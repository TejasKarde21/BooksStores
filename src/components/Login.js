import React from 'react'
import { Link } from 'react-router-dom';
import {auth,provider} from "../firebaseConfig";
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';


function Login() {
    const [user, setUser] = useState(null);

   const handleGoogleSignIn = () =>{
  signInWithPopup(auth,provider).then((result)=>{
    const user = result.user;
    console.log(user);
    setUser(user);
  }).catch((err)=>{
    console.log(err);
  })
   }

   const handleLogout=()=>{
    setUser(null);
   }

  return (
    <div className='bg-blue-400 w-screen h-screen flex justify-center items-center'>
      <div className='border-2 border-black w-[40%] h-[60%]  rounded-2xl bg-white flex justify-center pt-9'> 
        <div className='flex flex-col w-full items-center justify-between pb-6 pt-8 text-xl font-medium'>
             <input type='text'  placeholder='NAME' className='w-[80%] border-2 border-black py-4 px-4  rounded-full text-xl' />
             <input type='email' placeholder='EMAIL ' className='w-[80%] border-2 border-black py-4 px-4 rounded-full ' />
             <input type='password' placeholder='PASSWORD' className='w-[80%] border-2 border-black py-4 px-4 rounded-full'/>

             <button className='w-[80%] border-2 bg-black text-white font-semibold py-4 px-4 rounded-full'>SIGN UP</button>
             <div className='text-gray-500'>
             {user ? (
                <>
                <button className='mr-8 text-xl hover:text-blue-800' onClick={handleLogout}>LOGOUT</button>
                </>
             ):(
                <Link to={"./"}>  
             <button className='mr-8 text-xl hover:text-blue-800' onClick={handleGoogleSignIn} >SIGN UP Google+</button>

               </Link>

             )
               }
            

               <Link to={"../Sign"}>
               <button className='text-xl  hover:text-blue-800'>SIGN IN</button>
               </Link>
               
             </div>
        </div>
       </div>
    </div>
  )
} 

export default Login
