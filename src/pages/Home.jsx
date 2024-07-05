import React, { useRef, useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';
import Hero5 from '../components/Hero5';
import Footr from '../components/footr';

function Home() {

  return (
    <div className='bg-[#04162E] text-white w-full select-none  overflow-x-hidden'>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero5 />
      <Footr />
    </div>
  );
}

export default Home;
