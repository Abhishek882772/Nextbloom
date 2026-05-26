import React from 'react'
import CommonNav from '../components/CommonNav';

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-center p-8" style={{backgroundImage:"url('/profile.jpg')"}}>
      <CommonNav />
      <div className="w-[92vw] mx-auto my-10 p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden relative">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

  <div className="relative z-10">

    <div className="max-w-3xl">

      <p className="uppercase tracking-[0.25em] text-sm text-gray-700 font-semibold">
        WHY PEOPLE STAY
      </p>

      <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-gray-900">
        Built to feel smooth,
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          simple and actually useful.
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed">
        We focused on things users notice instantly — speed, clarity,
        clean interactions, and features that genuinely improve the experience.
        No unnecessary complexity.
      </p>

    </div>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

      <div className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:scale-[1.02] transition-all duration-300 shadow-lg">
        <div className="text-3xl">⚡</div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Instant Response
        </h2>

        <p className="mt-2 text-gray-800 leading-relaxed">
          Fast loading, smooth navigation, and responsive interactions that
          make the app feel alive.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:scale-[1.02] transition-all duration-300 shadow-lg">
        <div className="text-3xl">🔔</div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Smart Toast Notifications
        </h2>

        <p className="mt-2 text-gray-800 leading-relaxed">
          Clean toast alerts for actions, updates, errors, and success messages
          without interrupting the user experience.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:scale-[1.02] transition-all duration-300 shadow-lg">
        <div className="text-3xl">🎯</div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Simple UI That Makes Sense
        </h2>

        <p className="mt-2 text-gray-800 leading-relaxed">
          No confusing layouts or unnecessary clicks. Everything is placed
          where users naturally expect it.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-white/20 border border-white/20 hover:scale-[1.02] transition-all duration-300 shadow-lg">
        <div className="text-3xl">🚀</div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Real Features, Not Just Design
        </h2>

        <p className="mt-2 text-gray-800 leading-relaxed">
          Built with practical functionality like smooth media handling,
          realtime interactions, modern APIs, and scalable architecture.
        </p>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          Experience it yourself
        </h3>

        <p className="text-gray-700 mt-1">
          Designed for real users, real workflows, and real speed.
        </p>
      </div>

      <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        Explore Platform
      </button>

    </div>

  </div>
</div>
    </div>
  )
}

export default page