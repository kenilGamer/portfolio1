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
  const [sd, setSd] = useState(false);
  const handleDataFromChild = (data) => {
    setSd(data);
  };

  return isMobile == false ? (
    <div className="w-full h-[12.3vh] flex items-center justify-between  overflow-hidden py-10 px-10">
      <div className="nav-l">
        <h1 className="text-[3.5vw] ">Portfolio</h1>
      </div>

      <div className=" flex gap-10">
        {["About us", "Experience", "Projects", "Contact"].map((i, k) => (
          <div key={k} className=" nav-r hover:animate-pulse">
            <a href={`#${i}`}>{i}</a>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="w-full relative z-[9999] ">
      <Slider on={sd} sendDataToParent={handleDataFromChild} />
      <div className=" w-full h-[10vw] flex items-center  justify-between px-2">
        <div className=" relative h-full nav-l  w-[30vw]">
          <h1 className="flex items-center justify-center h-full ">Portfolio</h1>
        </div>
        <div className="h-full flex gap-4">
          
          <div  onClick={() => setSd(true)} className=" relative h-full  w-full nav-r">

            <h1  className=" scale-50"
            >   <HiOutlineMenuAlt4   className="w-full h-full fill-white text-4xl " /></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;