"use client"
import React from 'react'
import { useEffect, useRef } from 'react'
import Chart  from 'chart.js/auto'

const Leftblock = () => {
  const assetRef = useRef(null)
  const sprsRef = useRef(null)

  useEffect(() => {
    const assetChart = new Chart(assetRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Used', 'Remaining'],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: [ '#c32e09','rgb(149 8 8)'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false },
        },
      },
    })

    const sprsChart = new Chart(sprsRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Implemented', 'Partial', 'Missing','not scored'],
        datasets: [
          {
            data: [50, 20, 20, 10],
            backgroundColor: ['#260351','#440688','#8412ca','#c262ff' ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { position: 'bottom' },
        },
      },
    })

    return () => {
      assetChart.destroy()
      sprsChart.destroy()
    }
  }, [])

  return (
    <div className="w-[40vw] mt-10 mx-auto rounded-2xl bg-black/30 p-6 h-[58vh]">
      <div className="grid md:grid-cols-2 gap-6 hover:scale-105 transition-transform duration-300">
        <div className="bg-white/20 backdrop-blur-lg shadow-xl  rounded-xl p-5 shadow text-center text-black h-100px hover:scale-105 transition-transform duration-300">
          <h3 className="font-semibold mb-3">Repeated user</h3>
          <canvas ref={assetRef}></canvas>
          <p className="mt-3 text-lg font-bold">100 Assets</p>
        </div>
        <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-5 shadow text-center text-black h-100px hover:scale-105 transition-transform duration-300">
          <h3 className="font-semibold mb-3 ">SPRS Score</h3>
          <canvas ref={sprsRef}></canvas>
          <p className="mt-3 text-lg font-bold text-gray-800">-25 Score</p>
        </div>
      </div>
    </div>
  )
}

export default Leftblock