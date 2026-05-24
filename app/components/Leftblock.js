"use client"
import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const Leftblock = () => {
  const usersRef = useRef(null)
  const engagementRef = useRef(null)

  useEffect(() => {
    // Creator Community Growth Chart
    const usersChart = new Chart(usersRef.current, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Active Creators",
            data: [120, 220, 380, 520, 760, 980],
            borderColor: "#7c3aed",
            backgroundColor: "rgba(124,58,237,0.2)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#fff",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ddd",
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
            },
          },
          y: {
            ticks: {
              color: "#ddd",
            },
            grid: {
              color: "rgba(255,255,255,0.05)",
            },
          },
        },
      },
    })

    // Platform Feature Usage
    const engagementChart = new Chart(engagementRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "YouTube Integration",
          "Live Chat",
          "Community Posts",
          "Maps & Profiles",
        ],
        datasets: [
          {
            data: [50, 20, 20, 10], backgroundColor: ['#260351','#440688','#8412ca','#c262ff' ], borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "72%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#fff",
            },
          },
        },
      },
    })

    return () => {
      usersChart.destroy()
      engagementChart.destroy()
    }
  }, [])

  return (
    <div className="w-[40vw] mt-7 mx-auto rounded-2xl bg-white/20 backdrop-blur-lg shadow-xgit  p-6 h-[62vh] hover:scale-105 transition-transform duration-300">

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          Creator Community Analytics
        </h1>
        <p className="text-gray-300 mt-2 text-sm">
          Real-time insights for creators, engagement, and platform growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Community Growth */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:scale-105 transition duration-300">
          <h3 className="text-white text-lg font-semibold mb-4">
            Community Growth
          </h3>

          <canvas ref={usersRef}></canvas>

          <div className="mt-4">
            <p className="text-2xl font-bold text-violet-300">
              +980 Creators
            </p>
            <p className="text-gray-400 text-sm">
              Active users this month
            </p>
          </div>
        </div>

        {/* Feature Engagement */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:scale-105 transition duration-300">
          <h3 className="text-white text-lg font-semibold mb-4">
            Feature Engagement
          </h3>

          <canvas ref={engagementRef}></canvas>
        </div>
      </div>

      
    </div>
  )
}

export default Leftblock