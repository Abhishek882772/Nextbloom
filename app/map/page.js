import React from 'react'
import CommonNav from '../components/CommonNav'

const page = () => {
    return (
        <>
        <img src="https://lh3.googleusercontent.com/2lAf7svBiVkM81vTBH8PwqchBxH7o1WeUsMQBnNuWjmkYFLLil89AKT1UqvQ3cwhzbf4DJIwIVjia9HECKVMAoaQsJzOY48uK8Q=e365-pa-nu-w1200-rj" className='object-cover absolute h-full w-full' alt="" />
           
        <div className='w-full h-screen object-cover relative top-0 bg-black/75'>
             <div className='h-[10vh] w-full m-4'><CommonNav /></div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.856798796737!2d77.44301787387893!3d28.634053675663875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1776542691547!5m2!1sen!2sin"  className='h-[80vh] w-[85vw] m-auto border-0 justify-center items-center rounded-2xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </div>
        </>
    )
}

export default page
