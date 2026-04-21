import React from 'react'
import CommonNav from '../components/CommonNav'

const page = () => {
  return (
    <div>
      <video   autoPlay muted loop className='video-bg wifull h-screen object-cover absolute inset-0 -z-10'>
        <source src='https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4' type='video/mp4'/>
      </video>
      <div className='mt-[5vh]'><CommonNav /></div>
      
      <div className='relative z-10 flex flex-col gap-y-3 items-center justify-center border-black border-2 rounded-2xl mt-[15vh] m-auto w-[40vw] h-[60vh] text-white bg-black/40'>
        <h1 className='text-3xl font-bold mb-4'> NEXTBLOOM<span className='text-red-500 font-extrabold'>.</span></h1>
        <p className='text-lg mb-8'>Login to your account</p>
        <div className='flex justify-center items-center gap-7 '>
            <span className='block mb-2 font-bold text-lg'>Username:</span>
            <textarea name="Name" id="" className='bg-black/50 text-md text-white h-[45px] w-[250px] p-2 placeholder:text-gray-500 border border-black rounded-md '></textarea>
        </div>
        <div className='flex justify-center items-center gap-7'>
            <span className='block mb-2 font-bold text-lg'>Password:</span>
            <textarea name="Name" id="" className='bg-black/50 text-md text-white h-[45px] w-[250px] p-2 placeholder:text-gray-500 border border-black rounded-md '></textarea>
        </div>
        <button className='bg-red-600 px-6 py-2 rounded-md font-bold hover:bg-red-700  mt-6'>Login</button>
      </div>
    </div>
  )
}

export default page
