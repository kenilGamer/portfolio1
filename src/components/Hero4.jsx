import React, { useState } from "react";
import Cards from "./cards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero4() {
  const initialData = [
    {
      img: "/image.png",
      title: "Movies App",
      data: "I'm using React.js, it's my best project using APIs",
      live: "https://movies.godcraft.fun",
      code: "https://github.com/kenilGamer/Movies-app",
    },
    {
      img: "image1.png",
      title: "Godcrafts",
      data: "I'm using React.js, hosting website with the best hosting service",
      live: "https://godhost-iota.vercel.app",
      code: "https://github.com/kenilGamer/GODHOST",
    },
    {
      img: "image3.png",
      title: "3D-Parallax",
      data: "I'm using html,css,js, usering parallax effect createing project",
      live: "https://kenilgamer.github.io/3D-Parallax-Website/",
      code: "https://github.com/kenilGamer/3D-Parallax-Website",
    },
  ];

  const [data, setData] = useState(initialData);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "top 0%",
        end: "top -100%",
        toggleActions: "restart pause resume pause",
        scrub: 4,
        pin: true,
      }
    })
   tl.from(".card",{
    //  y: "-100%",
     opacity: 0,
     duration: 1,
     stagger: 0.3,

   })
  })
  return (
    <div className="w-full h-full p-10 max-md:px-6 max-md:mt-10 page4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">My Project</h1>
      <Cards data={data} />
    </div>
  );
}

export default Hero4;
