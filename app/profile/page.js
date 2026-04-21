"use client";
import React,{useState} from 'react'
import CommonNav from '../components/CommonNav';

const page=()=>{
const[editProfile,setEditProfile]=useState(false)
const[data,setData]=useState({
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGQ0Oux8NFCdwbecp6luDm5W2gc6czbaMGQ&s",
name:"Abhishek Tripathi",
email:"abhishek@email.com",
phone:"+91 9876543210",
address:"Delhi, India",
username:"@abhishek",
joined:"Jan 2024",
bio:"MERN Stack Developer",
website:"portfolio.com"
})
const handleEdit=e=>setData({...data,[e.target.name]:e.target.value})

return(
<div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 to-pink-600'>
<img src="https://wallpapers.com/images/hd/profile-background-lb5h1hm2cebpa63c.jpg" className='absolute top-0 w-full h-full'  alt="" />
<CommonNav/>
<div className='w-[380px] p-6 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl flex flex-col items-center gap-4'>
<div className='h-20 w-20 rounded-full bg-amber-100 border-4 border-white overflow-hidden'><img src={data.image||"/default.png"} alt="profile" className='w-full h-full object-cover'/></div>
{editProfile && (
<input name="image" value={data.image} onChange={handleEdit} placeholder="Image URL" className='bg-transparent border-b text-white text-center outline-none text-sm'/>
)}
{editProfile?
<input name="name" value={data.name} onChange={handleEdit} className='bg-transparent border-b text-white text-center outline-none'/>
:<h2 className='text-xl font-semibold text-white'>{data.name}</h2>}

{editProfile?
<input name="bio" value={data.bio} onChange={handleEdit} className='bg-transparent border-b text-white text-center outline-none'/>
:<p className='text-sm text-white/80'>{data.bio}</p>}

<div className='w-full mt-2 flex flex-col gap-3 text-white text-sm'>
{Object.entries(data).filter(([k])=>k!=="name"&&k!=="bio"&&k!=="image").map(([key,val])=>(
<div key={key} className='flex justify-between items-center'>
<span className='capitalize'>{key}</span>
{editProfile?
<input name={key} value={val} onChange={handleEdit} className='bg-transparent border-b outline-none text-right w-[60%]'/>
:<span>{val}</span>}
</div>
))}
</div>

<button onClick={()=>setEditProfile(!editProfile)} className='mt-3 px-4 py-2 rounded-lg bg-white text-amber-600 font-medium hover:bg-amber-100 transition'>
{editProfile?"Save":"Edit Profile"}
</button>
</div>
</div>
)}
export default page