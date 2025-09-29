import {Header} from "./Components/Header.jsx";
import {Hero} from "./Components/Hero.jsx";
import {Projects} from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import {ContactSection} from "./Components/ContactSection.jsx";
import {Footer} from "./Components/Footer.jsx";
import {Experience} from "./Components/Experience.jsx";
import {useEffect} from "react";

function App() {

// agregar tag css 'hiddenhiddenElem' a elementos para que este codigo de abajo funcione y se agregue animacion de fade in desde el lado izquierdo de la pantalla

    const classNames = ["hiddenElem", "hiddenElem2"];

    const selector = classNames.map(cls => `.${cls}`).join(', ');
    // Resulting selector string: ".class1, .class2, .my-element"

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll(selector);
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

  return (
    <div className="bg-black/90">
        <Header/>
            <Hero/>
            <Experience/>
            <Projects/>
            <About/>
            <ContactSection/>
            <Footer/>
    </div>
  )
}

export default App
