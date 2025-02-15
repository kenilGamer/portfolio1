import React from 'react'
import Home from './pages/Home'
import LocomotiveScroll from "locomotive-scroll";
import Canvas from './components/canvas';
function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.02,
      duration: 1.5,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });
  return (
   <div className='w-full h-screen' style={{ position: 'relative' }}>
     <Canvas />
     <Home  />
   </div>
  )
}

export default App