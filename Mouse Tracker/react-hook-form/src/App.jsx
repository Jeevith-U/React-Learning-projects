import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestForms from './Components/TestForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestForms/>
    </>
  )
}

export default App
