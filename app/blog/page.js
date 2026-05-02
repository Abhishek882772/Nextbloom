"use client"
import React,{useState} from "react";
import CommonNav from "../components/CommonNav";

export default function Page(){
const [list,setList]=useState([]);
const [input,setInput]=useState("");
const [caption,setCaption]=useState("");

const getSrc=(val)=>{
if(val.includes("<iframe")){
const match=val.match(/src="([^"]+)"/);
return match?match[1]:null;
}
if(val.includes("youtu.be/")) return `https://www.youtube.com/embed/${val.split("youtu.be/")[1].split("?")[0]}`;
if(val.includes("v=")) return `https://www.youtube.com/embed/${val.split("v=")[1].split("&")[0]}`;
return null;
};

const add=()=>{
const src=getSrc(input);
if(!src||!caption) return;
setList([...list,{src,caption}]);
setInput("");setCaption("");
};

return(
<div className="min-h-screen bg-cover bg-center p-8" style={{backgroundImage:"url('/profile.jpg')"}}>
<CommonNav/>
<div className="flex w-[90vw] m-auto my-4 gap-2 mb-4 bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-4 justify-between">
<input value={input} onChange={e=>setInput(e.target.value)} placeholder="iframe link" className=" rounded-2xl p-2 w-1/2 border-none cursor-pointer bg-white/20 backdrop-blur-lg shadow-xl  text-black"/>
<input value={caption} onChange={e=>setCaption(e.target.value)} placeholder="caption" className=" rounded-2xl p-2 w-1/3 border-none cursor-pointer bg-white/20 backdrop-blur-lg shadow-xl  text-black"/>
<button onClick={add} className="bg-white text-black font-bold rounded-2xl p-2 px-7 ">Add</button>
</div>

<div className="grid w-[90vw] m-auto mt-4 grid-cols-2 md:grid-cols-3 gap-4">
{list.map((v,i)=>(
<div key={i} className="rounded overflow-hidden bg-white/20 backdrop-blur-lg shadow-xl">
<iframe src={v.src} className="w-full h-60" allowFullScreen/>
<div className="p-2 text-sm font-bold">{v.caption}</div>
</div>
))}
</div>

</div>
);
}