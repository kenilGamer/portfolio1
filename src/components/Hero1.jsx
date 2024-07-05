import React from "react";
import Navbar from "./navbar";
import { useGSAP } from "@gsap/react";

function Hero1() {
  useGSAP(()=>{
    
  })
  return (
 <div>
  <Navbar/>
     <div className="w-full min-h-[100vh]  z-10 relative items-center flex p-5 max-md:p-3 max-md:flex-col  overflow-hidden  ">
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
      <div className="hero-r flex items-center justify-center w-1/2 max-md:w-[70vw]">
        <img src="/24325541_2022_ani_cartoon_27-removebg-preview 1.png" className="object-cover h-full" alt="" />
      </div>
    </div>
 </div>
  );
}

export default Hero1;
