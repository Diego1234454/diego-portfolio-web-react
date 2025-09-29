import { motion } from "motion/react"
export const Hero = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y:-50}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                className="max-h-screen" id="hero">
                <div className="grid grid-cols-1 min-h-screen lg:mx-60 md:mx-35 sm:mx-25 px-4 items-center justify-center lg:w-fit md:w-fit sm:w-fit w-full">
                    <div className="flex flex-col gap-10 px-2 w-full tracking-tight">
                        <h1 className="text-blue-300 xl:text-4xl lg:text-2xl sm:text-sm  md:text-xl ">Hi, my name is</h1>
                        <h2 className="text-white/80 xl:text-8xl text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">Diego Véliz.</h2>
                        <h3 className="text-white/60 font-semibold text-xl sm:text-xl  md:text-2xl lg:text-4xl xl:text-6xl  ">I'm currently learning web development.</h3>
                        <p className="text-white/50 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl">Hi! I'm from México and i'm learning web development using
                            <span className="text-blue-300/80"><a href="https://react.dev/" target="_blank"> React.JS</a></span> and <span className="text-blue-400"> <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></span>, while I keep improving my web development skills I'm pursuing a career in web development. I'm Passionate about what I do and will be posting my projects, skills and everything about my web development career on this website!</p>
                        <a href="#about" >
                            <div className="text-white/70 inset-ring-2 inset-ring-blue-400 px-6 py-3 w-fit font-semibold hover:bg-blue-400/20 transition-all duration-500 hover:scale-110 rounded-full">Learn more about me.</div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}