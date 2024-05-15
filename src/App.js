import React from 'react'
import Navbar1 from './profile/01. Navigation Bar/Navbar';
import Home from './profile/02. Home/Home';
import About from './profile/03. About/About';
import Skill from './profile/04. Skill/Skill';
import Cerification from './profile/05. Certification/Cerification';
import Contact from './profile/06. Contact Form/Contact';
import 'aos/dist/aos.css'

function App() {
    return (
        <>
            <Navbar1 />
            <Home />
            <About />
            <Skill />
            <Cerification/>
            <Contact />
        </>
    )
}

export default App