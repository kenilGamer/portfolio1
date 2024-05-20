import React, { useState } from "react";
import Cards from "./cards";

function Hero5() {
  const initialData = [
    {
      img: "/public/image.png",
      title: "Movies App",
      data: "I'm using React.js, it's my best project using APIs, backend with Node.js and Express",
      live: "https://movies.godcrafts.fun",
      code: "https://github.com/kenilGamer/Movies-app",
    },
    {
      img: "/public/image1.png",
      title: "Godcrafts",
      data: "I'm using React.js, hosting website with the best hosting service, backend with Node.js and Express",
      live: "https://godhost-iota.vercel.app",
      code: "https://github.com/kenilGamer/GODHOST",
    },
    {
      img: "/public/image3.png",
      title: "Movies App",
      data: "I'm using React.js, it's my best project using APIs, backend with Node.js and Express",
      live: "https://kenilgamer.github.io/3D-Parallax-Website/",
      code: "https://github.com/kenilGamer/3D-Parallax-Website",
    },
  ];

  const [data, setData] = useState(initialData);

  return (
    <div className="w-full h-full p-20">
      <h1 className="text-5xl font-semibold">Projects</h1>
      <div className="w-full h-full p-10 flex flex-col">
        <div className="flex h-full flex-wrap w-full items-center justify-center gap-5">
          {data.map((item, index) => (
            <div key={index} className="w-72 p-2">
              <div className="h-full w-full bg-[#132A54] p-5 rounded-xl">
                <div className="w-full h-48  bg-orange-400 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src={item.img} alt={item.title} className="object-cover h-full img"  />
                </div>
                <div className="mt-7">
                  <h1 className="text-lg font-semibold text-white">{item.title}</h1>
                  <p className="w-full text-lg mt-4 text-gray-300">
                    {item.data}
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center p-5 mt-7">
                  {item.live && (
                    <a href={item.live} className="py-2 px-12 rounded-full bg-blue-500 text-white">
                      Live
                    </a>
                  )}
                  {item.code && (
                    <a href={item.code} className="py-2 px-12 rounded-full bg-blue-500 text-white">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero5;
