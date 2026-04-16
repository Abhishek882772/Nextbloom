import Navbar from "./components/Navbar";
import Leftblock from "./components/Leftblock";
import Rightblock from "./components/Rightblock";
export default function Home() {
  return (
    <div className="w-full h-screen object-cover relative bg-black/75">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 -z-10">
        <source src="/background.mp4" type="video/mp4" /></video>
      <Navbar />
      <div className=" rounded-2xl  bg-black/10 m-6  mb-28 border-black/50 border-2 ">
        <div className="h-15 m-0 bg-black/45 rounded-t-2xl w-full opacity-85 flex items-center justify-between space-x-4 p-3 ">
          <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./image.png" height="30" width="30" className='invert-100' alt="" />
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Home </span></div>
          <div className="flex space-x-7 justify-between items-center">
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Features</div>
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Pricing</div>
            <div className="text-white font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Blogs</div>
            <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./location.png" height="20" width="20" className='invert-100 ' alt="" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Location </span></div>
            <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./call.png" height="20" width="20" className='invert-100  ' alt="" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Contact </span></div>
            <div className="relative group w-fit hover:scale-105 transition-transform duration-300"><img src="./help.png" height="40" width="40" className="invert cursor-pointer" alt="help" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Help </span></div>
          </div></div>
        <div className="flex m-3 p-1 h-[65vh]">
          <Leftblock className="m-2.5" />
          <Rightblock className="m-2.5" />
        </div>

      </div>

    </div>
  );
}
