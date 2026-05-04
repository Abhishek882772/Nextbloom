import React from 'react'
import CommonNav from '../components/CommonNav';

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-center p-8" style={{backgroundImage:"url('/profile.jpg')"}}>
      <CommonNav />
      <div className="w-[90vw] mx-auto my-7 p-7 bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl">
        
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Things we actually cared about while building this
        </h1>

        <p className="mt-3 text-gray-800 text-lg">
          Not buzzwords. Not “AI-powered everything”. Just features that solve real problems.
        </p>

        <div className="mt-10 space-y-8">
          
          <div>
            <h2 className="text-xl font-medium">Fast where it matters</h2>
            <p className="text-gray-800 mt-1">
              No unnecessary loading screens. No weird delays. You click something — it responds. 
              The way it should.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">Doesn’t fight you</h2>
            <p className="text-gray-800 mt-1">
              We tried really hard to not make you “learn the system”. It just works the way you expect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">Built for actual usage</h2>
            <p className="text-gray-800 mt-1">
              This wasn’t designed for screenshots. It’s built for daily use — messy, real, imperfect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">No overkill</h2>
            <p className="text-gray-800 mt-1">
              If something didn’t add value, we removed it. Simple as that.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <button className="bg-gray-900 text-white px-5 py-2.5 rounded-md hover:bg-black transition">
            Try it yourself
          </button>
        </div>

      </div>
    </div>
  )
}

export default page