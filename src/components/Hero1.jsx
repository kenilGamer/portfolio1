import React from "react";
import Navbar from "./navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero1() {
  useGSAP(()=>{
    gsap.from(".imgs1",{
      duration:2,
      scale:0,
      // yoyo:true,
      // repeat:-1,
      // ease:"elastic.inOut(1.5)"
    })
  })
  return (
 <div>
  <Navbar/>
     <div className="w-full min-h-[100vh] font1 z-10 relative items-center flex p-5 max-md:p-3 max-md:flex-col  overflow-hidden  ">
     <div className="shadow1 -z-10 w-96 h-96 top-0 -left-32 rounded-full absolute"></div>
     <div className="shadow1 -z-10 w-[70vh] h-[70vh] top-52 -right-8 rounded-full absolute"></div>
      <div className="hero-l w-1/2 max-md:w-full py-16 flex  max-md:items-center flex-col gap-16 justify-center">
        <h1 className="text-7xl max-md:text-[10vw] max-md:text-center text-nowrap font-bold">Hi I’m Kenil</h1>
        <p className="w-80 text-lg max-md:text-center">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <button className=" w-40 btn ">Contact Me</button>
      </div>
      <div className="hero-r flex items-center justify-center w-1/2 h-full max-md:w-[70vw] ">
        <div className="w-[70vh] rounded-full h-[70vh] max-md:h-[35vh] bg-sky-800 flex items-center justify-center">
        <img src="/public/Default_bg_remove_0_7e86b0ea-754c-4f86-bba0-d1426d0283df_0.png" className="object-cover w-full imgs1" alt="" />
          
        </div>
      </div>
      
    </div>
 </div>
  );
}

export default Hero1;
