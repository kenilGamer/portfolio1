import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

function Hero2() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);



  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: ".page2",
        start: "top 0%",
        end: "top -100%",
        toggleActions: "restart pause resume pause",
        markers: true,
        scrub:2,
        pin: true,
      }
    })
    tl.from(".imgs2",{
      duration: 1,
      opacity:0,
   
    })
    tl.from(".text1a",{
      duration: 1,
      opacity:0,
      y:500
    })
    tl.from(".img1a",{
      duration: 1,
      x: -100
    },'a')
    tl.from(".text-2a",{
      duration: 1,
      opacity:0,
      x:500
    })
  },'a')
  return (
    <div className="w-full min-h-[100vh] page2 z-10  md:p-20 ">
      <div className="w-full h-[80vh] max-md:h-full relative bg-[#0f1a2c] rounded-lg flex-col flex p-2">
        <h1 className="text-5xl absolute top-7 left-[35vw] font-bold imgs2">About</h1>
        <div className="flex items-center  max-md:flex-col max-md:w-full justify-center  max-md:mt-20 h-full">
        <div className="hero-l-1 w-2/4 h-[80vh] relative flexitems-center max-md:hidden overflow-hidden  justify-center ">
          <img
            src="/public/3d-portrait-high-school-teenager.png"
            className="h-full absolute imgs2 left-1/4"
            alt=""
          />
        </div>
        <div className="hero-r w-2/4 flex flex-col max-md:w-full  items-center justify-around">
          <div className="w-full   py-2 flex max-md:items-center max-md:flex-col overflow-hidden">
            <img className="max-md:w-52 img1a" src="/image 2.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center text1a">Frontend Developer</h1>
              <p className="max-md:text-center md:w-72 text-2a">
                I’m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex max-md:items-center max-md:flex-col overflow-hidden">
            <img className="max-md:w-52 img1a" src="/image 3.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center text1a">Backend Developer</h1>
              <p className="max-md:text-center md:w-72 text-2a">
              I have experience developing fast and optimised back-end systems and APIs
              </p>
            </div>
          </div>
          <div className="w-full py-2 flex max-md:items-center max-md:flex-col overflow-hidden ">
            <img className="max-md:w-52 img1a" src="/image 4.png" alt="" />
            <div>
              <h1 className="text-lg font-semibold max-md:text-center text1a">UI Designer</h1>
              <p className="max-md:text-center md:w-72 text-2a">
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