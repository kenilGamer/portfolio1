import React from "react";

function Hero1() {
  return (
    <div className="w-full h-[85vh]  z-10 relative flex p-20 ">
    
      <div className="hero-l w-1/2 py-16 flex flex-col gap-16 justify-center">
        <h1 className="text-7xl font-bold">Hi I’m Kenil</h1>
        <p className="w-80 text-lg">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <buttun className="px-10 py-3 bg-[#576CBC] inline-block w-44 rounded-full ">Contact Me</buttun>
      </div>
      <div className="hero-r flex items-center justify-center w-1/2">
        <img src="/24325541_2022_ani_cartoon_27-removebg-preview 1.png" className="object-cover h-full" alt="" />
      </div>
    </div>
  );
}

export default Hero1;
