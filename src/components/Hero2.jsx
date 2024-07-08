import React from "react";

function Hero2() {
  return (
    <div className="w-full min-h-[100vh]  z-10  md:p-20 ">
      <div className="w-full h-[80vh] max-md:h-full relative bg-[#0f1a2c] rounded-lg flex-col flex p-2">
        <h1 className="text-5xl absolute top-7 left-10 font-bold">About</h1>
        <div className="flex items-center  max-md:flex-col max-md:w-full justify-center  max-md:mt-20 h-full">
        <div className="hero-l w-2/4 h-[80vh] relative flexitems-center max-md:hidden justify-center ">
          <img
            src="/public/3d-portrait-high-school-teenager.png"
            className="h-full absolute left-1/4"
            alt=""
          />
        </div>
        <div className="hero-r w-1/2 flex flex-col max-md:w-full  items-center justify-around">
          <div className="w-full md:  py-2 flex max-md:items-center max-md:flex-col">
            <img className="max-md:w-52" src="/image 2.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center">Frontend Developer</h1>
              <p className="max-md:text-center md:w-72">
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex max-md:items-center max-md:flex-col">
            <img className="max-md:w-52" src="/image 3.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center">Backend Developer</h1>
              <p className="max-md:text-center md:w-72">
              I have experience developing fast and optimised back-end systems and APIs
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex max-md:items-center max-md:flex-col ">
            <img className="max-md:w-52" src="/image 4.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center">UI Designer</h1>
              <p className="max-md:text-center md:w-72">
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
