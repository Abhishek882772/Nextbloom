"use client";
import React from "react";
import {
  AreaChart,Area, XAxis,Tooltip, ResponsiveContainer,
} from "recharts";

const chartData = [
  { m: "Jan", u: 400 },
  { m: "Feb", u: 800 },
  { m: "Mar", u: 600 },
  { m: "Apr", u: 1200 },
  { m: "May", u: 900 },
  { m: "Jun", u: 1400 },
];
export default function Rightblock() {
  return (
    <div className="w-[40vw] mt-10 mx-auto rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl p-6 h-[58vh] hover:scale-105 transition-transform duration-300">
      <p className=" text-white mb-2 font-bold">Users</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ade80" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="m" stroke="#888" />
          <Tooltip />

          <Area type="monotone" dataKey="u" stroke="whit" strokeWidth={2} fill="url(#g)" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-sm text-gray-300 mt-4">
        UI/UX in charts and graphic design transforms complex data into actionable, easy-to-understand visual stories. Effective data visualization emphasizes simplicity, using clear labels, appropriate chart types (e.g., line charts for trends, bar charts for comparisons), and strategic color palettes to highlight .  </div>
    </div>
  );
}