import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  
  const [dark_theme, setDark_theme] = useState(true);
  const theme = () => {
    dark_theme == true ? setDark_theme(false) : setDark_theme(true);
  };

  const [sd, setSd] = useState(false);

  const handleDataFromChild = (data) => {
    setSd(data);
  };

  return isMobile == false ? (
    <div className="w-full min-h-[15.3vh] flex items-center justify-between relative overflow-hidden">
      <div className="nav-l">
          <img src="/Group5.svg" className="w-[20vw] absolute logo-nav top-[2vh] left-7 " alt="" />
          <h1 className="text-[3.5vw] absolute top-[3.7vh] logo logo-nav left-[4.8vw] ">Portfolio</h1>
      </div>

      <div className=" flex gap-10">
        {["About us", "Experience", "Projects", "Contact"].map((i, k) => (
          <div key={k} className="relative nav-r hover:animate-pulse">
            <img src="/Group 1.svg" width={140} alt="" />
            <div
              className={`absolute heading  text-md `}
            >
              <a >{i}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="overflow-hidden">
      <Slider on={sd} sendDataToParent={handleDataFromChild} />
      <div className=" w-full h-[10vw] flex items-center  justify-between px-2">
        <div className=" relative h-full  w-[30vw]">
         <h1 className="flex items-center justify-center h-full ">Portfolio</h1>
        </div>
        <div className="h-full flex gap-4">
          <div className=" relative h-full  w-[10vw] ">
         
          </div>
          <div className=" relative h-full  w-[10vw]">
            
            <h1 onClick={() => setSd(true)} className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-full h-full object-fill fill-white scale-50"
            >   <HiOutlineMenuAlt4 className="w-full h-full fill-white " /></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;