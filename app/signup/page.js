"use client";
import React, { useState } from 'react'
import CommonNav from '../components/CommonNav'
import {ToastContainer, toast} from "react-toastify";

const Page = () => {
  const [form, setForm] = useState({ username:"", email:"", password:"", confirmPassword:"" })
  const [errors, setErrors] = useState({})
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    let e = {}
    if (form.username.length < 3) e.username = "Min 3 chars"
    if (!form.email.includes("@")) e.email = "Invalid email"
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password))
      e.password = "Weak password"
    if (form.password !== form.confirmPassword) e.confirmPassword = "Not matching"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {

  e.preventDefault();

  if (!validate()) return;

  try {

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.username,
        email: form.email,
        password: form.password,
      }),
    });
    const data = await res.json();
    if (data.status === "success") {
      notifySuccess("Account created successfully!");
      setForm({
      username: "",  email: "",  password: "",  confirmPassword: "",
      });
      setErrors({});
    } else {
      notifyError(data.message || "Signup failed");
    }
  } catch (error) {
    console.log(error);
    notifyError("Something went wrong");
  }
};

  return (
    <div>
      <video autoPlay muted loop className='w-full h-screen object-cover absolute inset-0 -z-10'>
        <source src='https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4' type='video/mp4'/>
      </video>
      <div className='mt-[5vh]'><CommonNav /></div>

      <form onSubmit={handleSubmit} className='relative z-10 flex flex-col gap-3 items-center border-2 rounded-2xl mt-[5vh] m-auto w-[40vw] h-[80vh] text-white bg-black/40 p-6'>
        <h1 className='text-3xl font-bold'>Create Account<span className='text-red-500'>.</span></h1>

        <div className='w-full'>
          <span>Username:</span>
          <input name="username" value={form.username} placeholder="Username" onChange={handleChange} className='w-full p-2 bg-black/50 rounded-md'/>
          {errors.username && <p className='text-red-400 text-sm'>{errors.username}</p>}
        </div>

        <div className='w-full'>
          <span>Email:</span>
          <input type="email" value={form.email} name="email" placeholder="Email" onChange={handleChange} className='w-full p-2 bg-black/50 rounded-md'/>
          {errors.email && <p className='text-red-400 text-sm'>{errors.email}</p>}
        </div>

        <div className='w-full'>
         <span>Password:</span> 
         <span className='text-xs text-gray-300 text-center mx-7'>Password must contain 8+ chars, upper, lower, number, special char</span>
          <input type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange} className='w-full p-2 bg-black/50 rounded-md'/>
          {errors.password && <p className='text-red-400 text-sm'>{errors.password}</p>}
        </div>
        <div className='w-full'>
          <span>Confirm Password:</span>
          <input type="password" value={form.confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className='w-full p-2 bg-black/50 rounded-md'/>
          {errors.confirmPassword && <p className='text-red-400 text-sm'>{errors.confirmPassword}</p>}
        </div>
   <button className='bg-red-600 px-6 py-2 rounded-md font-bold hover:bg-red-700  ' type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Page