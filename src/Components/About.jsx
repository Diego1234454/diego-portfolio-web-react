export default function About() {
    return (
        <>
            <div className="flex flex-col min-h-screen lg:mx-50 md:mx-25 sm:mx-15 px-4 justify-center lg:w-fit md:w-fit sm:w-fit w-full gap-10 " id="about">
                <h1 className="text-white/80 xl:text-8xl text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">About Me</h1>
                <p className="text-white/50 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl">Hi! I'm from México and i'm learning web development using <span className="text-blue-300/80">React.JS</span> and <span className="text-blue-400">TailwindCSS</span>, while I keep improving my web development skills I'm pursuing a career in web development. I'm Passionate about what I do and will be posting my projects, skills and everything about my web development career in this website!</p>
            </div>
        </>
    )
}