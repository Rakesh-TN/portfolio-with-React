import React from 'react'
import Home from './profile/Home/Home';
import About from './profile/About/About';
import Skill from './profile/Skill/Skill';
import Navbar1 from './profile/Navigation Bar/Navbar';
import Cerification from './profile/Certification/Cerification';
import Contact from './profile/Contact Form/Contact';

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