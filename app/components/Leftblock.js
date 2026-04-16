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
            backgroundColor: [ 'black','gray-200'],
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
        labels: ['Implemented', 'Partial', 'Missing'],
        datasets: [
          {
            data: [50, 25, 25],
            backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'],
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
    <div className="w-[40vw] mt-10 mx-auto rounded-2xl bg-black p-6">
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-xl p-5 shadow text-center">
          <h3 className="font-semibold mb-3">Asset Overview</h3>
          <canvas ref={assetRef}></canvas>
          <p className="mt-3 text-lg font-bold">100 Assets</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow text-center">
          <h3 className="font-semibold mb-3">SPRS Score</h3>
          <canvas ref={sprsRef}></canvas>
          <p className="mt-3 text-lg font-bold text-red-500">-25 Score</p>
        </div>

      </div>
    </div>
  )
}

export default Leftblock