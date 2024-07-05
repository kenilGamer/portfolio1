import React, { useState } from "react";
import Cards from "./cards";

function Hero5() {
  const initialData = [
    {
      img: "/image.png",
      title: "Movies App",
      data: "I'm using React.js, it's my best project using APIs",
      live: "https://movies.godcrafts.fun",
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

  return (
    <div className="w-full h-full p-20 max-md:px-6 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center">My Project</h1>
      <Cards data={data} />
     {/* <Cards/> */}
    </div>
  );
}

export default Hero5;
