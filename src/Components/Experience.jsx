export const Experience = () => {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:flex-col lg:grid-cols-2 min-h-screen space-y-8 scroll-mt-28 my-20" id="experience">
                <div className="flex flex-col items-center justify-start min-w-full"> {/*justify-center*/}
                    <div className="flex flex-col items-center justify-center min-w-full max-w-4xl gap-12">
                        <h1 className="text-blue-400 text-2xl font-semibold capitalized">Education</h1>
                        <div className="flex flex-col hiddenElem justify-center gap-2 tracking-tight text-justify w-full rounded-sm py-4 px-6 hover:scale-110 transition-transform duration-300 overflow-auto  max-w-xl md:max-w-xl lg:max-w-md xl:max-w-xl  xs:bg-blue-950">
                            <h2 className="text-white/90 font-bold">Universidad Tecnologica de Tamaulipas Norte</h2>
                            <p className="text-blue-400/80">2018-2022</p>
                            <p className="text-white/80">Multiplatform Software development</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start min-w-full"> {/*justify-center*/}
                    <div className="flex flex-col items-center  min-w-full max-w-4xl gap-12 ">
                        <h1 className="text-blue-400 text-2xl font-semibold ">Experience</h1>
                        <div className="flex flex-col hiddenElem justify-center gap-2 tracking-tight text-justify w-full rounded-sm py-4 px-6 hover:scale-110 transition-transform duration-300 overflow-auto  max-w-xl md:max-w-xl lg:max-w-md xl:max-w-xl">
                            <h2 className="text-white/90 font-bold">Alcom Electrónicos De México</h2>
                            <p className="text-blue-400/80">Feb. 2022 - Dec. 2024</p>
                            <ul className="space-y-4 ">
                                <li className="text-white/80">
                                    Provided maintenance to printers, scanners, PCs (software and hardware).
                                </li>
                                <li className="text-white/80">
                                    WinForms application development using C#, Xamarin application development using C#
                                </li>
                                <li className="text-white/80">
                                    Transact SQL in MS SQL Server; working with Stored Procedures for WinForms and Android (Xamarin) applications, as well as for reports in MS Report Builder.
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col hiddenElem justify-center gap-2 tracking-tight text-justify w-full rounded-sm py-4 px-6 hover:scale-110 transition-transform duration-300 overflow-auto  max-w-xl md:max-w-xl lg:max-w-md xl:max-w-xl">
                            <h2 className="text-white/90 font-bold">Corning</h2>
                            <p className="text-blue-400/80">Jan. 2025 - Apr. 2025</p>
                            <ul className="space-y-4 ">
                                <li className="text-white/80">
                                    Provided tech support as a Help Desk Technician, answering calls from user around the world,
                                    both in English and Spanish about tech problems ranging from Hardware (PC Peripherals,
                                    Monitors, etc.), Software (Software installation, tech support for Office and other Microsoft apps,
                                    Cisco AnyConnect Secure Mobility Client) to inquiries and issues about user accounts.
                                </li>

                                <li className="text-white/80">
                                    Tech support ticketing using ServiceNow and Cisco WebEX.
                                </li>

                                <li className="text-white/80">
                                    Most used tools: Active Directory, Cisco AnyConnect Secure Mobility Client, Cisco WebEX,
                                    ServiceNow, LogMeIn, Microsoft Teams.
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}