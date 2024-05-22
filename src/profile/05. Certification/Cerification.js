import React, { useEffect } from 'react'
import AOS from 'aos'


function Cerification() {
    useEffect(()=> {
        AOS.init({duration: 3000})
      },[])
    return (
        <main className='bg-black' id='Certification'>
            <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <div>
                    <div className='container p-5' data-aos='fade-right'>
                    <p className='h1 text-center text-light'>Certification</p>
                        <div className='d-flex row'>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card '>
                                    <img src={require('./Assets/Tech Fountion.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/HTML.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Programming with JavaScript_page-0001.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/React Basics_page-0001.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Front-end-developer.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Introduction to Mobile Development_page-0001.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/react basic certificate.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/React Native Certificate_page-0001.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/css certificate.jpg')} alt='No Image' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cerification