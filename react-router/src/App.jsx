import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Team from './Components/Team';
import NotFound from './Components/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
      <div className='bg-gray-500'>
          <nav className='bg-blue-500 p-4'>
            <ul className='flex justify-center space-x-5'>
              <li className='text-white hover:text-black font-medium transition duration-200'><Link to="/">Home</Link></li>
              <li className='text-white hover:text-black font-medium transition duration-200'><Link to="/about">About</Link></li>
              <li className='text-white hover:text-black font-medium transition duration-200'><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Routes>
              <Route path = "/" element = {<Home/>}></Route>
              <Route path='/home' element = {<Home/>}/>
              <Route path='/about' element = {<About/>}>
                <Route path='team' element = {<Team/>}/>
              </Route>
              <Route path='/contact' element = {<Contact/>}/>
              <Route path='*' element = {<NotFound/>}/>
          </Routes>
          </div>
      </Router>
  )
}

export default App
