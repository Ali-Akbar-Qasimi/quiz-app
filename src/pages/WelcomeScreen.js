import React from 'react'
import { Outlet , Link } from 'react-router-dom'

export default function WelcomeScreen() {
  return (
    <>
      <div className='welcome-screen'>
          <h1 className='welcome-screen-title'>Welcome</h1>
          <p className='welcome-screen-desperation'>let's educate ourselves</p>
          <Link className='welcome-screen-btn button' to="/quiz-app">Start Quiz</Link>
      </div>
      <Outlet />
    </>
  )
}

