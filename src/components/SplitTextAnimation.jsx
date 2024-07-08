import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const SplitTextAnimation = ({ children, animationProps }) => {
  const containerRef = useRef();

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".animated-text");
    elements.forEach((element) => {
      const chars = element.textContent.split("").map((char, index) => (
        `<span key=${index} class="char">${char}</span>`
      )).join("");
      element.innerHTML = chars;
    });

    const chars = containerRef.current.querySelectorAll(".char");
    gsap.from(chars, {
      duration: animationProps.duration || 1,
      opacity: animationProps.opacity || 0,
      y: animationProps.y || 50,
      rotation: animationProps.rotation || 0,
      scale: animationProps.scale || 1,
      stagger: animationProps.stagger || 0.05,
      ease: animationProps.ease || "back.out(1.7)",
    });
  }, [children, animationProps]);

  return (
    <div ref={containerRef} className="text-animation-container">
      {children}
    </div>
  );
};

export default SplitTextAnimation;
