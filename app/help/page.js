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
            <div className="group flex justify-center items-center gap-3 ">
                <Link href="/" className="m-5"><img src="./image.png" height="30" width="30" className='invert' alt="" />
                    <span className="block  text-white text-xs text-center opacity-0 group-hover:opacity-100 transition">
                        Home
                    </span></Link>
                <div className='font-bold text-white hover:scale-105 m-auto transition-transform duration-300 hover:cursor-pointer'>NEXTBLOOM<span className='text-red-500 font-extrabold'>.</span></div>
                    
            </div>
            
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

            </div>
        </div>
    );
}