import {Header} from "./Components/Header.jsx";
import {Hero} from "./Components/Hero.jsx";
import {Projects} from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import {ContactSection} from "./Components/ContactSection.jsx";
import {Footer} from "./Components/Footer.jsx";
import {Experience} from "./Components/Experience.jsx";

function App() {

  return (
    <>
        <Header/>
        <body className="bg-black/90">
            <Hero/>
            <Experience/>
            <Projects/>
            <About/>
            <ContactSection/>
            <Footer/>
        </body>

    </>
  )
}

export default App
