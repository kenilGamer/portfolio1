import React, { useEffect } from "react";
import gsap from "gsap";
// import Nav_box from "../partials/Nav_box";

function Slider(on) {
  useEffect(() => {
    const tl = gsap.timeline();
    const tl_1 = gsap.timeline();

    if (on.on) {
      tl.from(".sd_", {
        top: 0,
        duration: 1,
      });
    } else {
      tl_1.from(".sd_", {
        top: -120 + "vh",
        duration: 1,
      });
    }
  }, [on.on]);

  return (
    <div
      className={`sd_ imgs2 w-[100vw] h-[100vh] overflow-hidden  fixed z-30 decoration-[2s]`}
      style={{
        top: on.on ? "0" : "-120vh",
        transitionDuration: "1.2s",
        transitionTimingFunction: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
      }}
    >
  
          <h1 onClick={() => on.sendDataToParent(false)} className=" absolute top-[70%] left-[48%] text-6xl fill-white ">x</h1>
       
      <div className="w-full  flex flex-col gap-9 py-28 px-10 h-full bg-sky-600 ">
        {["shop", "all products","daily steals", "more"].map((e, i) => (
        //   <Nav_box key={i} color="white" width={207} text={e} />
        <div className="flex items-center justify-center frot1 text-4xl mt-5  tracking-widest font-extralight" key={i}>{e}</div>
        ))}
      </div>
    </div>
  );
}

export default Slider;