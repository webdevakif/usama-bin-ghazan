import './App.css';
import { NavBar } from './Components/NavBar';
import {Home} from './Components/Home';
import {About} from './Components/About'
import {Services} from './Components/Services'
import {Skills} from './Components/Skills'
import {Projects} from './Components/Projects'
import {Contact} from './Components/Contact'
import {Footer} from './Components/Footer'
import { useRef } from "react";



function App() {
  const homeSection=useRef(null);
  const aboutSection = useRef(null);
  const servicesSection=useRef(null);
  const skillsSection=useRef(null);
  const projectSection=useRef(null);
  const contactSection = useRef(null);
  const footerSection=useRef(null);


  return (<>
    <NavBar aboutSection={aboutSection} servicesSection={servicesSection} homeSection={homeSection} contactSection={contactSection} skillsSection={skillsSection} projectSection={projectSection} footerSection={footerSection}/>
    <Home  ref={homeSection}/>
    <About ref={aboutSection}/>
    <Services ref={servicesSection}/>
    <Skills ref={skillsSection}/>
    <Projects ref={projectSection}/>
    <Contact ref={contactSection}/>
    <Footer ref={footerSection}/>
  </>
  );
}

export default App;
