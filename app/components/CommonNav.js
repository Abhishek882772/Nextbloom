import React from 'react'
import Link from "next/link";
const CommonNav = () => {
  return (
    
      <div className="h-15  bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl  w-[90vw] m-auto opacity-85 flex items-center justify-between space-x-4 p-3 ">
          <div className="relative  w-fit justify-center items-center flex mx-4 gap-9">
            <Link href="/profile" className="relative group w-fit hover:scale-105 transition-transform duration-300">
              <img src="./profile.png" height="40" width="40" className="invert cursor-pointer" alt="help" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Profile </span>
        </Link>
          <Link href="/" className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./image.png" height="30" width="30" className='invert-100' alt="" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Home </span></Link>
        </div>
        <div className="flex space-x-7 justify-between items-center">
            <Link href="/signup" className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Sign Up</Link>
            <Link href="/login" className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Login</Link>

            <Link href="/contact" className="relative group w-fit hover:scale-105 transition-transform duration-300">
              <img src="./call.png" height="20" width="20" className='invert-100  ' alt="" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Contact </span>
            </Link>
            <Link href="/help" className="relative group w-fit hover:scale-105 transition-transform duration-300">
              <img src="./help.png" height="40" width="40" className="invert cursor-pointer" alt="help" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Help </span>
            </Link>
        </div>
    </div>
  )
}

export default CommonNav
