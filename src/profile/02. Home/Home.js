import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect';

function Home() {
  useEffect(()=> {
    AOS.init({duration: 3000})
  },[])
  return (
    <main className='bg-Img' id='Home' >
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div className='text-center text-light p-5' data-aos='fade-up'>
          <p className='fs-1 fw-bold'>Hi, I'm Rakesh TN 👋</p>
          <p className='fs-3'><span className='text-light'> I'm a </span> <span className='typer'><Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Front-end Developer")
                            .pauseFor(500)
                            .deleteAll()
                        typewriter.typeString("React Developer")
                            .pauseFor(500)
                            .deleteAll()
                        typewriter.typeString("Graphic Designer")
                            .pauseFor(500)
                            .deleteAll()
                        typewriter.typeString("UI UX Designer")
                            .pauseFor(500)
                            .deleteAll()
                            .start();
                    }}
                /></span></p>
          <div className='text-center'>
            <a href='https://www.linkedin.com/in/rakesh-tn-5682ba309/' target='blank'><button className='btn bgbtn text-light m-2'><FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffffff",}} /> LinkedIn</button></a>
            <a href='https://github.com/Rakesh-TN' target='blank'><button className='btn btn-secondary m-2'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff"}} /> Github</button></a>
          </div>
          <a download href={require('./Assets/Resume of Rakesh TN.pdf')}><button className='btn btn-success m-2'>Download CV </button></a>
        </div>
      </div>
    </main>
  )
}

export default Home