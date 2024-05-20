import React from "react";

function Navbar() {
  return (
    <div className="w-full relative h-20 flex items-center z-50 justify-between py-10 px-20">
      <div className="nav-l">
        <a href="#" className="text-3xl font-bold">Portfolio</a>
      </div>
      <div className="nav-r flex gap-16">
        {["About us","Experience","Projects","Contact"].map((i,k)=>(
            <a href={`#${i}`} className="text-lg " key={k}>{i}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
