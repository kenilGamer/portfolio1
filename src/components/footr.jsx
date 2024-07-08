import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LiaLinkedinIn } from 'react-icons/lia';
import { GiThunderBlade } from 'react-icons/gi';
function Footr() {
    const date = new Date()
    const dateYear = date.getFullYear()
  return (
    <div className='w-full h-[60vh] bg-[#132A54] mt-12 md:px-20 md:py-7'>
        <div className='flex max-md:flex-col items-center justify-center max-md:gap-20 w-full h-full'>
            <div className="footr-l w-1/2 flex flex-col justify-center items-center ">
                <h1 className='text-6xl md:text-8xl font-semibold'>Contact</h1>
                <p className='md:text-2xl font-medium'>Feel free to reach out!</p>
            </div>
            <div className="footr-r w-1/2 max-md:w-full flex flex-col justify-center items-center gap-6">
                <a className='text-xl flex items-center gap-3' href="mailto: kenilk677@email.com"><IoMdMail/> kenilk677@gmail.com</a>
                <a className='text-xl flex items-center gap-3' href="https://www.linkedin.com/in/kenil-gamer-3b927227a/"><LiaLinkedinIn/> linkedin.com/kenilgamer</a>
                <a className='text-xl flex items-center gap-3' href="https://github.com/kenilgamer"><IoLogoGithub/> github.com/kenilgamer</a>
            </div>
        </div>
        <h1 className='text-xl text-center font-semibold'>copyright {dateYear} Godcrafts</h1>
    </div>
  )
}

export default Footr