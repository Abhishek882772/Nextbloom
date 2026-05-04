import Link from "next/link";
export default function page() {
    return (
        <div >
            <video autoPlay muted loop className="video-bg wifull h-screen object-cover absolute inset-0 -z-10">
                <source
                    src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4"
                    type="video/mp4"
                />
            </video>
            <div className='grid grid-cols-10 min-h-screen'>
                <div className='flex flex-col h-80vh col-span-2 justify-center items-center gap-10 p-6 shadow-lg rounded-3xl bg-black/30 border border-purple-500/30 m-6 mb-28'>
                    <div className="group flex flex-col justify-center items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <div className='font-bold text-white hover:scale-105 m-auto transition-transform duration-300 hover:cursor-pointer'>NEXTBLOOM<span className='text-red-500 font-extrabold'>.</span></div>
                        <Link href="/"><img src="./image.png" height="30" width="30" className='invert' alt="" />
                            <span className="block mt-2 text-white text-xs text-center opacity-0 group-hover:opacity-100 transition">
                                Home
                            </span></Link>
                        <Link href="/profile" className="relative group w-fit hover:scale-105 transition-transform duration-300">
                            <img src="./profile.png" height="40" width="40" className="invert cursor-pointer" alt="help" />
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Profile </span>
                        </Link>
                        <Link href="/contact" className="relative my-3 group w-fit hover:scale-105 transition-transform duration-300">
                            <img src="./call.png" height="20" width="20" className='invert-100  ' alt="" />
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
        transition"> Contact </span>
                        </Link>
                        <Link href="/signup" className="text-white my-3 font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Sign Up</Link>
                        <Link href="/login" className="text-white my-3 font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300">Login</Link>
                    </div>
                </div>
                <div className='col-span-8 flex flex-col items-center text-center p-8 gap-6 w-full  rounded-3xl backdrop-blur-md bg-white/5 border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500'>

                    <h1 className="text-4xl font-bold mb-8 text-center text-white mt-10">
                        Help And Guidence
                    </h1>
                    <div className="max-w-3xl mx-auto space-y-6 text-gray-300">

                        <div className="p-5 rounded-xl bg-white/5 border border-purple-500/30">
                            <h2 className="text-xl font-semibold text-white mb-2">📩 Contact Form</h2>
                            <p>Fill in your name, email, and message, then click "Send Message" we will reach out to you shortly.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-white/5 border border-purple-500/30">
                            <h2 className="text-xl font-semibold text-white mb-2">🔗 Social Links</h2>
                            <p>Use icons to connect via GitHub, LinkedIn, Gmail, and more.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-white/5 border border-purple-500/30">
                            <h2 className="text-xl font-semibold text-white mb-2">🧭 Navigation</h2>
                            <p>Use navbar and links to move between pages.</p>
                        </div>

                        <div className="p-5 rounded-xl bg-white/5 border border-purple-500/30">
                            <h2 className="text-xl font-semibold text-white mb-2">⚠️ Troubleshooting</h2>
                            <p>If message fails, check your internet or try again later.</p>
                        </div>
                        <p className="text-white text-sm">For any questions or assistance, please <Link href="/chat" className="text-blue-600 font-bold hover:cursor-pointer hover:scale-105 transition-transform duration-300 underline"> Chat with Us</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}