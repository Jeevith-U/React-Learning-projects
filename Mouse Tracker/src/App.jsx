import { useState } from 'react'
import './App.css'
import React from 'react'
import { useEffect } from 'react'
import ParentComponent from './ParentComponent'
import Timer from './Components/Timer'
import TestAxios from './Components/TestAxios'
import MultipleRequest from './Components/MultipleRequestUsingAxious'
import PostData from './Components/PostData'

const App = () => {

  return (

         <div>
            {/* <ParentComponent/> */}
            {/* <Timer/> */}
            {/* <TestAxios/> */}
            {/* <MultipleRequest/> */}
            <PostData/>
         </div>
   
  )
}

export default App