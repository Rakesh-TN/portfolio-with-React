import React, { useEffect } from 'react'
import AOS from 'aos'
import './About.css'

function About() {
    useEffect(()=> {
        AOS.init({duration: 3000})
      },[])
    return (
        <main id='Skill'>
            <div className='d-flex flex-column justify-content-center align-items-center min-vh-100 bg-black'>
                <div className='text-light'>
                    <div className='container d-flex row p-5' data-aos='fade-right'>
                        <p className='h1 text-center skillHeader'>Skill</p>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/html-5-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>HTML</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/css-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>CSS</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/js-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>JavaScript</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/react-a-javascript-library-for-building-user-interfaces-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>React</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/python-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Python</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/wordpress-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Wordpress</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/figma-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Figma</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-6'>
                            <div className='text-center'>
                                <img src={require('./Assets/adobe-xd-100.png')} alt='No Image' className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Adobe XD</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About