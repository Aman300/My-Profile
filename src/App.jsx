import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <navbar>
      <div className='w-full py-3 border-b'>

        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <h1>LOGO</h1>
          </div>
          <div className='flex gap-10'>
            <a href="">Home</a>
            <a href="">Work</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Testimonial</a>
          </div>
          <div>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-semibold'>Contact</button>
          </div>
        </div>
        
      </div>
    </navbar>      
    </>
  )
}

export default App
