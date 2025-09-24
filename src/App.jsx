import './App.css'
import {Header} from "./Components/Header.jsx";
import {Hero} from "./Components/Hero.jsx";
import {Projects} from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import {ContactSection} from "./Components/ContactSection.jsx";
import {Footer} from "./Components/Footer.jsx";

function App() {

  return (
    <>
        <Header/>
        <div className="bg-black/90">
            <Hero/>
            {/*EXPERIENCE*/}
            <Projects/>
            <About/>
            <ContactSection/>
            <Footer/>
        </div>

    </>
  )
}

export default App
