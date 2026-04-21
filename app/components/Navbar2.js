"use client";
import React from 'react'
import Link from "next/link";

const Navbar2 = () => {
  return (
        <div className="h-15 m-0 bg-black/45 rounded-t-2xl w-full opacity-85 flex items-center justify-between space-x-4 p-3 ">
          <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./image.png" height="30" width="30" className='invert-100' alt="" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Home </span></div>
          <div className="flex space-x-7 justify-between items-center">
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Features</div>
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Pricing</div>
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Blogs</div>
            <Link href="/map" className="relative group w-fit hover:scale-105 transition-transform duration-300">
              <img src="./location.png" height="20" width="20" className='invert-100 ' alt="" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Location </span>
            </Link>
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
          </div></div>
       
  )
}

export default Navbar2
