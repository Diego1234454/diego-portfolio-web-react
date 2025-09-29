import {ArrowUp} from "lucide-react";

export const Footer = () => {
    return (
        <>
            <footer className="py-12 px-4 bg-card relative border-border pt-8 flex flex-wrap justify-between items-center bg-black/80 ">
                <p className="text-xs md:text-sm lg:text-md text-white">&copy; {new Date().getFullYear()} Diego Véliz™ or whatever. All rights reserved.</p>
                <a href="#" className="p-2 rounded-full text-white transition-colors absolute right-0">
                    <ArrowUp size={50} className="hover:scale-120 transition-transform duration-300" />
                </a>
            </footer>
        </>
    )
}