import React from 'react'
import './Skill.css'

function Skill() {
  return (
    <main className='aboutBg' id='About'>
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div>
          <p className='h1 text-center text-light'>About</p>
          <div className='d-flex justify-content-center'>
            <div className='cards w-50 m-3'>
              <div className='d-flex row'>
                <div className='col-lg-4'>
                  <div>
                    <img src={require('./Assets/Rakesh TN Passport Size Photo.jpg')} className='img-fluid rockyImg' />
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