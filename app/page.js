import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Leftblock from "./components/Leftblock";
import Rightblock from "./components/Rightblock";
export default function Home() {
  return (
    <div className="w-full h-screen object-cover relative bg-black/75">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 -z-10">
        <source src="/background.mp4" type="video/mp4" /></video>
      <Navbar />
      <div className=" rounded-2xl  bg-black/10 m-6  mb-28 border-black/50 border-2 ">
      <Navbar2 />
       <div className="flex m-3 p-1 h-[65vh]">
          <Leftblock className="m-2.5" />
          <Rightblock className="m-2.5" />
        </div>

      </div>
    </div>
  );
}
