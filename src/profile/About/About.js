import React from 'react'
import './About.css'

function About() {
    return (
        <main id='Skill'>
            <div className='d-flex flex-column justify-content-center align-items-center min-vh-100 bg-black'>
                <div className='text-light'>
                    <p className='h1 text-center'>Skill</p>
                    <div className='container d-flex row p-5'>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/html-5-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>HTML</p>
                        </div>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/css-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>CSS</p>
                        </div>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/js-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>JavaScript</p>
                        </div>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/react-a-javascript-library-for-building-user-interfaces-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>React</p>
                        </div>
                        <div className='col-lg-3'>
                            <div  className='text-center'>
                                <img src={require('./Assets/python-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Python</p>
                        </div>
                        <div className='col-lg-3'>
                            <div  className='text-center'>
                                <img src={require('./Assets/wordpress-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Wordpress</p>
                        </div>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/figma-100.png')} className='img-fluid skillIcon' />
                            </div>
                            <p className='text-center fw-bold'>Figma</p>
                        </div>
                        <div className='col-lg-3'>
                            <div className='text-center'>
                                <img src={require('./Assets/adobe-xd-100.png')} className='img-fluid skillIcon' />
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