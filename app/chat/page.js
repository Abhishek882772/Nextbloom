"use client";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import CommonNav from "../components/CommonNav";

export default function page() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io();

    socketRef.current.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !socketRef.current) return;

    socketRef.current.emit("chat message", message);
    setMessage("");
  };

  return (
    <div>
      <video autoPlay muted loop className="w-full h-screen object-cover absolute inset-0 -z-10">
        <source src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4" type="video/mp4"/>
      </video>

      <CommonNav/>

      <div className="p-[10px] pb-[60px]">
        {messages.map((msg,i)=>(
          <div key={i} className="flex justify-end mb-[6px]">
            <div className="bg-[#333] text-white font-bold px-[12px] py-[8px] rounded-[14px] max-w-[70%] text-[14px] leading-[1.3]">
              {msg}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="fixed bottom-0 left-0 right-0 flex p-[10px] bg-black/20 border-t border-black">
        <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type a message" className="font-bold flex-1 px-[20px] py-[10px] rounded-[20px] bg-[#f1f1f1] text-[14px] outline-none"/>
        <button type="submit" className="ml-[6px] px-[36px] rounded-[20px] bg-[#333] font-bold text-white text-[14px]">Send</button>
      </form>
    </div>
  );
}