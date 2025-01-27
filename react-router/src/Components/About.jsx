import React from 'react'
import { Link, Links, Outlet } from 'react-router-dom'
import Team from './Team'
import Home from './Home'

const About = () => {
  return (
    <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold text-blue-400'>Welcome to About Page..!</h1>
        <p className='text-yellow-400 text-lg'>Get Ready to learn about us, Have a grate learning</p>

        <nav>

          <ul>
            <li><Link to="/team"></Link>Team</li>
            <li><Link to="/"></Link>Home</li>
          </ul>
        </nav>

        <div className='mt-8 w-full max-w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default About