/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import "./animation.css"
const Animation = () => {
  const cubeRef = useRef(null);

  // Cube spinning animation
  useAnimationFrame((t) => {
    if (!cubeRef.current) return;
    const rotate = t / 100;
    const y = Math.sin(t / 500) * 20;
    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (

    
      <div className="">
        <div className="cube-container">
          <div className="cube" ref={cubeRef}>
            <div className="side front">
              <span className="cube-text">Register</span>
            </div>
            <div className="side back">
              <span className="cube-text">Join Us</span>
            </div>
            <div className="side left">
              <span className="cube-text">Start Your Journey</span>
            </div>
            <div className="side right">
              <span className="cube-text">Welcome</span>
            </div>
            <div className="side top">
              <span className="cube-text">Sign Up Now</span>
            </div>
            <div className="side bottom">
              <span className="cube-text">Let's Go!</span>
            </div>
          </div>
        </div>
      </div>

     
 
  );
};

export default Animation;
