import {Link} from "lucide-react";

export default function About() {
    return (
        <>
            <div className="flex flex-col scroll-mt-24  lg:mx-50 md:mx-25 sm:mx-15 px-4 lg:w-fit md:w-fit sm:w-fit w-full gap-10 tracking-tight text-justify " id="about">
                <h1 className="text-white/80 xl:text-8xl text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">About Me</h1>
                <p className="text-white/60 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl ">Hi! I'm from México and i'm learning web development using <span className="text-blue-300/80"><a href="https://react.dev/" target="_blank">React.JS</a> </span> and <span className="text-blue-400"><a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
                    </span>, while I keep improving my web development skills I'm pursuing a career in web development. I'm Passionate about what I do and will be posting my projects, skills and everything about my web development career in this website!
                </p>
                <h1 className="text-white/80 xl:text-4xl text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold">Computer and Language Skills</h1>
                <p className="text-white/60 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl ">T-SQL/SQL Server, C# (WinForms, Android Development with Xamarin), XML, React.JS, JavaScript, HTML, TailwindCSS, Excel,
                    PowerBI, MS Report Builder, Microsoft Word, PowerPoint, Visual Studio 2019,
                    ServiceNow, WebEX, Cisco AnyConnect Secure Mobility Client, LogMeIn, VNC Server.
                    Proficient in Spanish and English.
                </p>
                <h1 className="text-white/80 xl:text-4xl text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold">Complementary Training</h1>
                <div className="flex flex-col">
                    <a href="https://www.udemy.com/certificate/UC-5aa86055-7588-4b9c-8b82-46e6241a7566/" target="_blank" className="text-blue-400/70 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl tracking-tight flex w-fit">The Advanced SQL Server For Data Analysis <Link size={18}/></a>
                    <p className="text-white/70">By Travis Cuzick on <span className="text-purple-400/90">Udemy</span></p>
                </div>
                <div className="flex flex-col">
                    <a href="https://www.udemy.com/certificate/UC-95b238f3-4d66-4bec-b3b1-c9793a10094c/" target="_blank" className="text-blue-400/70 text-justify sm:text-sm  md:text-md lg:text-xl xl:text-2xl tracking-tight flex w-fit">Microsoft Power BI Desktop for Business Intelligence <Link size={18}/></a>
                    <p className="text-white/70">By Aaron Parry and Chris Dutton on <span className="text-purple-400/90">Udemy</span></p>
                </div>
                <div className="space-x-8 flex">
                    <a href="/Files/CV_DiegoAllanVelizMedina_2025_ENGLISH.pdf" target="_blank"><div className="text-white font-semibold bg-blue-500/60 hover:scale-110 transition-transform duration-300 rounded-full p-3">CV in English</div></a>
                    <a href="/Files/CV_DiegoAllanVelizMedina_2025_ESPAÑOL.pdf" target="_blank"><div className="text-white font-semibold bg-blue-500/60 hover:scale-110 transition-transform duration-300 rounded-full p-3">CV en Español</div></a>
                </div>
            </div>
        </>
    )
}