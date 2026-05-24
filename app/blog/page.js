"use client";

import React, { useState, useEffect } from "react";
import CommonNav from "../components/CommonNav";

export default function Page() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [caption, setCaption] = useState("");

  const getVideoLink = (url) => {

    if (!url) return "";

    if (url.includes("youtu.be/")) {
      return `https://www.youtube.com/embed/${
        url.split("youtu.be/")[1].split("?")[0]
      }`;
    }

    if (url.includes("watch?v=")) {
      return `https://www.youtube.com/embed/${
        url.split("v=")[1].split("&")[0]
      }`;
    }

    return url;
  };

  const add = async () => {

    if (!input.trim()) {
      return alert("Enter video link");
    }

    try {

      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input,
          caption,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {

        setList([
          ...list,
          {
            src: getVideoLink(input),
            caption,
          },
        ]);

        setInput("");
        setCaption("");
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blog");
      
      // Add this check
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Expected JSON, got:", contentType);
        return;
      }

      const data = await res.json();

      // Guard: ensure it's an array
      if (!Array.isArray(data)) {
        console.error("Expected array, got:", data);
        return;
      }

      const formattedData = data.map((item) => ({
        src: getVideoLink(item.input),
        caption: item.caption,
      }));

      setList(formattedData);

    } catch (error) {
      console.log(error);
    }
  };

  fetchBlogs();
}, []);

  return (

    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/profile.jpg')" }}
    >

      <CommonNav />

      <div className="flex w-[90vw] m-auto my-4 gap-2 mb-4 bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-4 justify-between">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste youtube link"
          className="rounded-2xl p-2 w-1/2 bg-white/20 backdrop-blur-lg shadow-xl text-black outline-none"
        />

        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write caption"
          className="rounded-2xl p-2 w-1/3 bg-white/20 backdrop-blur-lg shadow-xl text-black outline-none"
        />

        <button
          onClick={add}
          className="bg-white text-black font-bold rounded-2xl p-2 px-7"
        >
          Add
        </button>

      </div>

      <div className="grid w-[90vw] m-auto mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {list.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white/20 backdrop-blur-lg shadow-xl"
          >

            <iframe
              src={item.src}
              className="w-full h-60"
              allowFullScreen
            />

            <div className="p-3 text-sm font-bold text-white">
              {item.caption}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}