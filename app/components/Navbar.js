import React from 'react'

const Navbar = () => {
    return (
        <div className='w-[80vw] mt-10 mx-auto px-6  rounded-full h-15 bg-black/30 flex items-center justify-between text-2xl font-bold text-gray-800'>
            <div className='flex space-x-9 justify-centeritems-center'>
                <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./profile.png" height="30" width="30" className='invert-100' alt="" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Profile </span></div>
                <div className='font-bold text-white hover:scale-105 transition-transform duration-300 hover:cursor-pointer'>NEXTBLOOM<span className='text-red-500 font-extrabold'>.</span></div>
            </div>
            <div className='flex space-x-9 justify-centeritems-center'>
                <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./login.png" height="30" width="30" className='invert-100' alt="" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Login </span></div>
                <div className='relative group w-fit flex text-lg font-bold gap-2 hover:scale-105 transition-transform duration-300 hover:cursor-pointer border-2 border-white px-3 py-0.5 rounded-2xl text-white'> Register
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> SignUp </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
