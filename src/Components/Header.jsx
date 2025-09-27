import { faTerminal, faBars, faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navItems = [
        {name: "Home", href: "#"},
        {name: "Experience", href: "#experience"},
        {name: "Projects", href: "#projects"},
        {name: "About Me", href: "#about"},
        {name: "Contact", href: "#contact"},

    ]

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className={`top-0 z-50 sticky flex flex-col min-w-full resize transition-all p-1 duration-300 ${scrolled ? "bg-black/95" : "bg-transparent p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"}`}>
                <div className="w-full justify-between px-2 sm:px-2 md:px-5 py-4 flex">
                    <a className="flex items-center justify-between gap-2" href="#">
                        <FontAwesomeIcon icon={faTerminal} className="text-blue-400" size="xl" />
                        <h1 className="text-white/95 sm:text-1xl md:text-xl lg:text-2xl font-thin xl:text-3xl">Diego Véliz's Web Portfolio</h1>
                    </a>

                    {/* desktop nav */}

                    <div className="hidden md:flex space-x-8 text-white/80 md:text-sm xl:text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="transition-colors duration-300 hover:text-blue-400 font-semibold"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* mobile nav */}

                    <button className="md:hidden z-50 px-4"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen ? <FontAwesomeIcon icon={faSquareXmark} className="text-white" size={"xl"} /> : <FontAwesomeIcon icon={faBars} className="text-white" size={"xl"} /> }
                    </button>

                    <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${                        isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"}`}>

                        <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-white transition-colors duration-300 hover:text-blue-400 font-semibold"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}