import {
    ArrowUp,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Twitter
} from "lucide-react";

export const ContactSection = () => {
    return (
        <>
            <div className="flex items-center justify-center bg-black/80 py-7" id="contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="text-primary h-6 w-6 text-white/80" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white/80">Email:</h4>
                                    <a href="mailto:medinadiego607@gmail.com" className="text-white/60 hover:text-blue-300/80 transition-colors">
                                        medinadiego607@gmail.com </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="text-primary h-6 w-6 text-white/80" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white/80">Phone Number:</h4>
                                    <a href="tel:+528993175207" className="text-white/60  hover:text-blue-300/80 transition-colors">
                                        +52 (899) 317-5207 </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="text-primary h-6 w-6 text-white/80" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white/80">Location:</h4>
                                    <a className="text-white/60 transition-colors">
                                        Reynosa, Tamaulipas, México </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="rounded-lg shadow-xs items-center  flex flex-col">
                        <h4 className="font-medium mb-4 pb-2 text-white/80">Connect with me on:</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/diego-allan-véliz-medina-29906427a" title="My LinkedIn account" target="_blank"><Linkedin className="text-white/60 hover:text-blue-400/80 transition-colors"/></a>
                            <a href="https://github.com/Diego1234454?tab=repositories" title="My Github account" target="_blank"><Github className="text-white/60 hover:text-white transition-colors"/></a>
                            <a href="https://www.instagram.com/allan_med7/" title="My instagram profile" target="_blank"><Instagram className="text-white/60 hover:text-pink-500/80 transition-colors"/></a>
                            <a href="https://www.facebook.com/allan.veliz.237464/" title="My Facebook profile" target="_blank"><Facebook className="text-white/60 hover:text-blue-500/80 transition-colors"/></a>
                            <a href="https://wa.me/528993175207?" target="_blank" title="My Whatsapp!"><MessageCircle className="text-white/60 hover:text-green-400/80 transition-colors"/></a>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}