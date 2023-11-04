import React from 'react'

function Cerification() {
    return (
        <main className='bg-black'>
            <section className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
                <div>
                    <p className='h1 text-center text-light'>Certification</p>
                    <div className='container p-5'>
                        <div className='d-flex row'>
                            <div className='col-lg-4 my-2'>
                                <div className='card '>
                                    <img src={require('./Assets/Tech Fountion.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/HTML.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/css certificate.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Programming with JavaScript_page-0001.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/React Basics_page-0001.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Front-end-developer.jpg')} className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-4 my-2'>
                                <div className='card'>
                                    <img src={require('./Assets/Introduction to Mobile Development_page-0001.jpg')} className='img-fluid' />
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