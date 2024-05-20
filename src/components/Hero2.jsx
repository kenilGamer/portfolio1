import React from "react";

function Hero2() {
  return (
    <div className="w-full h-full -mt-32 z-10 relative p-20 ">
      <div className="w-full min-h-[80%] max-md:h-[30vh] bg-[#0f1a2c] rounded-lg flex-col flex p-2">
        <h1 className="text-5xl font-bold">About</h1>
        <div className="flex items-center justify-center  md:mt-10 h-full">
        <div className="hero-l w-2/4 flex items-center justify-center ">
          <img
            src="/24325547_2022_ani_cartoon_28-removebg-preview 1.png"
            className=" img"
            alt=""
          />
        </div>
        <div className="hero-r w-1/2 flex flex-col justify-around">
          <div className="w-full py-2 flex ">
            <img src="/image 2.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold">Frontend Developer</h1>
              <p>
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex ">
            <img src="/image 3.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold">Backend Developer</h1>
              <p>
              I have experience developing fast and optimised back-end systems and APIs
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex ">
            <img src="/image 4.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold">UI Designer</h1>
              <p>
              I have designed multiple landing pages and have created design systems as well
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
