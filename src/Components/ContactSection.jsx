import {
    ArrowUp,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone, Pointer,
    Twitter
} from "lucide-react";
import React from "react";
import {toast, ToastContainer} from "react-toastify";

export const ContactSection = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7fb6d6fd-e371-48e2-ab09-87600a2e19c0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message! I'll get back to you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 w-full my-25 gap-12" id="contact">

                 <div className="space-y-8 flex justify-center">
                        <div className="space-y-6 ">
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

                    <div className="rounded-lg shadow-xs items-center flex flex-col">
                        <h4 className="font-medium mb-4 pb-2 text-white/80">Connect with me on:</h4>
                        <div className="flex space-x-4 ">
                            <a href="https://www.linkedin.com/in/diego-allan-véliz-medina-29906427a" title="My LinkedIn account" target="_blank"><Linkedin className="text-white/60 hover:text-blue-400/80 transition-colors"/></a>
                            <a href="https://github.com/Diego1234454?tab=repositories" title="My Github account" target="_blank"><Github className="text-white/60 hover:text-white transition-colors"/></a>
                            <a href="https://www.instagram.com/allan_med7/" title="My instagram profile" target="_blank"><Instagram className="text-white/60 hover:text-pink-500/80 transition-colors"/></a>
                            <a href="https://www.facebook.com/allan.veliz.237464/" title="My Facebook profile" target="_blank"><Facebook className="text-white/60 hover:text-blue-500/80 transition-colors"/></a>
                            <a href="https://wa.me/528993175207?" target="_blank" title="My Whatsapp!"><MessageCircle className="text-white/60 hover:text-green-400/80 transition-colors"/></a>

                        </div>
                    </div>

                <div className="flex flex-col m-auto">
                    <div className="flex flex-row justify-center space-x-2">
                        <h4 className="font-medium mb-4 pb-2 text-white/80">You can also, send me an email here</h4>
                        <Pointer className="text-white/60 rotate-180"/>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4 sm:w-auto md:w-60 lg:w-80 ">
                        <h3 className="text-white">Your name</h3>
                        <input type="text" name="name" id="name" placeholder="Your name" className="bg-white/90 rounded p-1 w-full " required/>

                        <h3 className="text-white">Your Email</h3>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="bg-white/90 rounded p-1 w-full" required/>

                        <h3 className="text-white">Message</h3>
                        <textarea className="bg-white/90 rounded p-1 w-full  resize-none" name="Message" placeholder="Message" required></textarea>

                        <button className="bg-blue-600 text-white py-2 px-12  rounded hover:cursor-pointer">
                            {result ? result : "Send Message"}</button>
                        <ToastContainer />
                    </form>
                </div>


            </div>

        </>
    )
}