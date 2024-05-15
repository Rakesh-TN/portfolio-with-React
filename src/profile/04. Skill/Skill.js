import React, { useEffect } from 'react'
import AOS from 'aos'
import './Skill.css'

function Skill() {
  useEffect(()=> {
    AOS.init({duration: 3000})
  },[])
  return (
    <main className='aboutBg' id='About'>
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div data-aos='fade-right'>
          <p className='h1 text-center text-light'>About</p>
          <div className='d-flex justify-content-center'>
            <div className='cards w-50 m-3'>
              <div className='d-flex row'>
                <div className='col-lg-4'>
                  <div>
                    <img src={require('./Assets/Rakesh TN Passport Size Photo.jpg')} alt='No Image' className='img-fluid rockyImg' />
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='p-3 text-light'>
                    <p>Hello! I'm Rakesh, a web developer with a strong passion for crafting digital experiences. My journey into web development began with a fascination for problem-solving and a love for creating beautiful, functional websites. I thrive on the challenges of turning complex ideas into user-friendly, interactive solutions.</p>
                    <p>I specialize in front-end and back-end development, working with a variety of technologies, including HTML, CSS, JavaScript, and React.Js. I'm driven by a desire to stay up-to-date with the latest industry trends and to create responsive and visually appealing websites.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Skill