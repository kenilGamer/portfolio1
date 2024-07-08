import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Hero3() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top 0%",
        end: "top -100%",
        toggleActions: "restart pause resume pause",
       
        scrub: 4,
        pin: true,
      }
    })

    tl.from(".skill", {
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
      stagger:0.3
    })
  })
  return (
    <div className='w-full h-[100vh] flex page3 flex-col p-10'>
      <div className='w-full  h-full flex flex-col '>
        <h1 className='text-5xl font-semibold text-center text-nowrap'>My Skills</h1>
        <div className='w-full h-full max-md:flex-col p-0 mt-10 flex items-center justify-around gap-32 max-md:gap-10 flex-wrap'>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/image 5.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/css.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/node.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/figma.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/javascript-logo-8892AEFCAC-seeklogo.com.webp" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/react.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/mongose.png" width={80} className=' object-cover' alt="" />
          </div>
          <div className='w-32 h-32 bg-[#19376D] skill rounded-full flex items-center justify-center'>
            <img src="/php_PNG25.webp" width={180} className=' object-cover' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3