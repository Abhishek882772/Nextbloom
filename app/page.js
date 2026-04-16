import Navbar from "./components/Navbar";
import Leftblock from "./components/Leftblock";
import Rightblock from "./components/Rightblock";
export default function Home() {
  return (
    <div video-auto-play="true" video-loop="true" video-muted="true" className="w-full h-screen object-cover">
      <video src="./background.mp4" className="absolute" />
      <Navbar />
      <div className=" rounded-2xl  opacity-55 bg-black/50 m-6 ">
        <div className="h-15 m-0 bg-black rounded-t-2xl w-full"></div>
        <div className="flex m-3 p-1 ">
          <Leftblock className="bg-black m-2.5" />
          <Rightblock className="bg-black  m-2.5" />
        </div>

      </div>

    </div>
  );
}
