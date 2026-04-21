"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

const page = () => {
    const [mail, setmail] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handelChange = (e) => {
        setmail({ ...mail, [e.target.name]: e.target.value });
    };

    const notify = () => toast("Mail sent successfully!");

    const handlesubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mail)
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Message Sent');
                    setmail({
                        name: "",
                        email: "",
                        message: ""
                    });
                } else if (data.status === 'fail') {
                    alert('Message failed to send');
                }
            });
    };

    return (
        <>
        <video autoPlay muted loop className="video-bg wifull h-screen object-cover absolute inset-0 -z-10">
                    <source
                      src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4"
                      type="video/mp4"
                    />
                  </video>
        <div className='grid grid-cols-10 min-h-screen'>
            <div className='flex flex-col h-80vh col-span-2 justify-center items-center gap-10 p-6 shadow-lg rounded-3xl bg-black/30 border border-purple-500/30 m-6 mb-28'>
                <div className="group flex flex-col justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
                    <div className='font-bold text-white hover:scale-105 m-auto transition-transform duration-300 hover:cursor-pointer'>NEXTBLOOM<span className='text-red-500 font-extrabold'>.</span></div>
                    <Link href="/"><img src="./image.png" height="30" width="30" className='invert' alt="" />
                    <span className="block mt-2 text-white text-xs text-center opacity-0 group-hover:opacity-100 transition">
                        Home
                    </span></Link>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center">
                    <a href='https://github.com/Abhishek882772' className='invert w-[40px] h-[40px] hover:scale-110 m-auto transition-transform duration-300 hover:cursor-pointer  p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/github/000000" alt="" />
                    </a>

                    <a href='https://portfolio-teal-mu-62.vercel.app' className='invert w-[40px] h-[40px] hover:scale-110 m-auto transition-transform duration-300 hover:cursor-pointer  p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/vercel/000000" alt="" />
                    </a>

                    <a href='https://www.linkedin.com/in/abhishek-tripathi-a548142b8/' className='invert w-[40px] h-[40px] hover:scale-110 m-auto transition-transform duration-300 hover:cursor-pointer  overflow-hidden rounded-full'>
                        <img className='invert' src="https://cdn.pixabay.com/photo/2017/11/10/05/05/linkedin-2935407_1280.png" alt="" />
                    </a>

                    <a href='https://x.com/AbhishekTr66198' className='invert w-[40px] h-[40px] hover:scale-110 m-auto transition-transform duration-300 hover:cursor-pointer  p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/x/000000" alt="" />
                    </a>

                    <a href='https://leetcode.com/u/Abhi_882/' className='invert w-[40px] h-[40px] hover:scale-110 m-auto transition-transform duration-300 hover:cursor-pointer  p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/leetcode/000000" alt="" />
                    </a>
                </div>
            </div>

            <div className='col-span-8 w-full flex flex-col justify-center mt-0 items-center p-6'>
                <form onSubmit={handlesubmit} className='flex flex-col items-center text-center p-8 gap-6 w-full max-w-3xl rounded-3xl backdrop-blur-md bg-white/5 border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500'>

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Contact Me
                    </h2>

                    <div className='flex flex-row w-full gap-2 text-left justify-between gap-2'>
                        <span className="font-semibold text-white">Name:</span>
                        <input className='p-3 rounded-2xl w-full bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300' type="text" name="name" value={mail.name} onChange={handelChange} placeholder="Enter your name" />
                    </div>

                    <div className='flex flex-row w-full gap-2 text-left justify-between gap-2'>
                        <span className="font-semibold text-white">Email:</span>
                        <input className='p-3 rounded-2xl w-full bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300' type="email" name="email" value={mail.email} onChange={handelChange} placeholder="Enter your email" />
                    </div>

                    <div className='flex flex-row w-full gap-2 text-left justify-between gap-2'>
                        <span className="font-semibold text-white">Message:</span>
                        <textarea className='p-3 rounded-2xl w-full bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none' rows="4" name="message" value={mail.message} onChange={handelChange} placeholder="Write your message"></textarea>
                    </div>

                    <button onClick={notify} className='font-bold bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-3 rounded-3xl shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] active:scale-95 transition-all duration-300' type="submit">
                        Send Message
                    </button>

                    <ToastContainer />
                </form>

                
            </div>

        </div>
        </>
    );
};

export default page;