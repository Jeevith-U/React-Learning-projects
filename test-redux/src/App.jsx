import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Baaa Guru Redux Kali</h1>
      <Counter/>
      <Counter2/>
    </>
  )
}

export default App
