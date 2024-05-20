import React from 'react'
import Navbar from './components/navbar'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'
import Hero5 from './components/Hero5'
import Footr from './components/footr'

function App() {
  return (
    <div className='bg-[#04162E] relative text-white w-screen h-screen overflow-x-hidden'>
          <div className="shadow1 -z-0 w-96 h-96 -top-20 -left-10 rounded-full  absolute"></div>
          <div className="shadow1 -z-0 w-[70vh] h-[70vh] top-52 -right-8 rounded-full  absolute"></div>
      <Navbar/>
      <Hero1/>
      <Hero2/>
      <Hero3/>
      <Hero5/>
      <Footr/>
    </div>
  )
}

export default App