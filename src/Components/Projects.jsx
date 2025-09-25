export const Projects = () => {

    const projectList = [

        {id: 1, name: "Diego Véliz's Web Portfolio", description: "First ever project done only by my self, and own web portfolio.", tags: ["HTML", "TailWindCSS", "JavaScript"], imageUrl: "/Projects/web-portfolio.png", href: "https://diego-portfolio-web-react.vercel.app/"},
        // {id: 2, name: "Project 2", description: "Project description", tags: ["HTML", "CSS", "JavaScript"], imageUrl: "/Projects/gatin.png", href: "#"},
        // {id: 3, name: "Project 3", description: "Project description", tags: ["HTML", "CSS", "JavaScript"], imageUrl: "/Projects/gatin.png", href: "#"},
        // {id: 4, name: "Project 4", description: "Project description", tags: ["HTML", "CSS", "JavaScript"], imageUrl: "/Projects/gatin.png", href: "#"},



    ]

    return (
        <div id="projects" className="scroll-mt-24 ">
            <div className=" relative min-h-svh flex flex-col items-center w-full">

                <div className="relative flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white/80" > Featured <span className="text-blue-400/80">Projects</span></h2>
                    <p className="text-center text-white/70 my-8">
                        Here are some of my featured projects
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-6">
                    {projectList.map((item, key) => (

                        <div className="scale-[0.9] origin-top-left">
                            <div className="bg-blue-500/50 rounded p-1 hover:scale-110 hover:bg-blue-500/80 transition-transform duration-300 max-w-xl mx-auto">
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {/* ✅ Aspect ratio wrapper */}
                                    <div className="aspect-[16/9]">
                                        <img
                                            className="h-full w-full object-cover rounded"
                                            src={item.imageUrl}
                                            alt="ProjectImage"
                                            key={key}
                                        />
                                    </div>
                                    <div className="my-2">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span className="px-2 py-1 text-xs border border-black bg-white/40 font-medium rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-center mb-2">
                                        <p className="text-white/70 font-bold ">{item.name}</p>
                                        <p className="text-white/60 font-semibold">{item.description}</p>
                                    </div>
                                </a>
                            </div>
                        </div>



                    ))}
                </div>

            </div>
        </div>
    )
}