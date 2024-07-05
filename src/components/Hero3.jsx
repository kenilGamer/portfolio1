import React from 'react'

function Hero3() {
  return (
    <div className='w-full h-full flex flex-col mt-32 p-20'>
        <div className='w-full  h-full flex flex-col  p-5'>
            <h1 className='text-5xl font-semibold text-center text-nowrap'>My Skills</h1>
            <div className='w-full h-full max-md:flex-col p-10 mt-10 flex items-center justify-around gap-32 max-md:gap-10 flex-wrap'>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/image 5.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/css.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/node.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/figma.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/javascript-logo-8892AEFCAC-seeklogo.com.webp" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/react.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/mongose.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/php_PNG25.webp" width={180} className=' object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero3