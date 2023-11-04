import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className='bg-Img' id='Home'>
      <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <div className='text-center text-light p-5'>
          <p className='fs-1 fw-bold'>Hi, I'm Rakesh TN 👋</p>
          <p className='fs-4'>FRONT-END DEVELOPER</p>
          <div className='text-center'>
            <a href='https://www.linkedin.com/in/rakesh-t-n-154510191/' target='blank'><button className='btn bgbtn text-light m-2'><img width="25" height="25" src="https://img.icons8.com/color/48/linkedin.png" className='mx-2' alt="linkedin"/>LinkedIn</button></a>
            <a href='https://github.com/Rakesh-TN' target='blank'><button className='btn btn-secondary m-2'><img width="25" height="25" src="https://img.icons8.com/ios-filled/25/ffffff/github.png" className='mx-2' alt="github"/>Github</button></a>
          </div>
          <a download href='./Assets/Resume of Rakesh TN.pdf'><button className='btn btn-success m-2'>Downlad CV </button></a>
        </div>
      </div>
    </main>
  )
}

export default Home