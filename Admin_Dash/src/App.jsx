import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Employees from './Pages/Employees'
import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'




function App() {
  const [count, setCount] = useState(0)
  const activeMenu = true;

  return (
    <>
      <BrowserRouter>

        <div className='main'>
          <div className="sidebar">
            <SideBar />
          </div>
          <div className='right-cont'>
            <div className="header">
              <Header />
            </div>

            <div className="content">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/employees' element={<Employees />} />
              </Routes>
            </div>

          </div>
        </div>



      </BrowserRouter>


    </>
  )
}

export default App
