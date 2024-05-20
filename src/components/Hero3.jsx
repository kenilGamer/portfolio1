import React from 'react'

function Hero3() {
  return (
    <div className='w-full h-full flex flex-col  p-20'>
        <div className='w-full  h-full flex flex-col  p-5'>
            <h1 className='text-5xl font-semibold text-center'>My Skills</h1>
            <div className='w-full h-full  flex-col  p-10 -mt-10 flex items-center justify-around gap-32 flex-wrap'>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/image 5.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/css.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/node.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/figma.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/javascript-logo-8892AEFCAC-seeklogo.com.webp" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/react.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/mongose.png" width={80} className=' object-cover' alt="" />
                </div>
                <div className='w-32 h-32 bg-[#19376D] rounded-full flex items-center justify-center'>
                  <img src="/public/php_PNG25.webp" width={180} className=' object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero3