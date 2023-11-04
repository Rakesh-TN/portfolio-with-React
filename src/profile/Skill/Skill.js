import React from 'react'

function Skill() {
  return (
    <main className='aboutBg' id='About'>
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div>
          <p className='h1 text-center text-light'>About</p>
          <div className=''>
            <div className='card bg-dark  w-50'>
              <div className='d-flex'>
                <div className='col-lg-4'>
                  <div>
                    <img src={require('./Assets/Rakesh TN Passport Size Photo.jpg')} className='img-fluid' />
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='p-5'>
                    <p className='text-light'>Hi, I'm Rakesh</p>
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