"use client"
import React,{useState} from "react";

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
<div className="min-h-screen bg-cover bg-center">

<div className="flex gap-2 mb-4 rounded-2xl bg-black/40 p-4">
<input value={input} onChange={e=>setInput(e.target.value)} placeholder="iframe or link" className="border p-2 w-1/2 bg-amber-200 text-black"/>
<input value={caption} onChange={e=>setCaption(e.target.value)} placeholder="caption" className="border p-2 w-1/3 bg-amber-200 text-black"/>
<button onClick={add} className="bg-black text-white px-3">Add</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{list.map((v,i)=>(
<div key={i} className="shadow rounded overflow-hidden bg-white/80">
<iframe src={v.src} className="w-full h-40" allowFullScreen/>
<div className="p-2 text-sm">{v.caption}</div>
</div>
))}
</div>

</div>
);
}