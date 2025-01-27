import React from 'react'
import { Outlet } from 'react-router-dom'

const Team = () => {
  return (
    <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold text-blue-400'>Welcome to Team Page..!</h1>
        <p className='text-yellow-400 text-lg'>Let me present you the buggers</p>
    </div>
  )
}

export default Team