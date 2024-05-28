// src/components/AnimatedComponent.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../index.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const element = animationRef.current;
    if (element) {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: true,
        },
        rotation: 360,
        x: 200,
        duration: 2,
        yoyo: true,
        repeat: -1,
      });
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container">
      <div className="gsap-animation" ref={animationRef}></div>
    </div>
  );
};

export default AnimatedComponent;
