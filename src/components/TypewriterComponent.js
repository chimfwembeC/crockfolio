import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypewriterComponent.css';

const TypewriterComponent = ({text}) => {
  return (
    <div className="typewriter-container text-lg">
    <Typewriter
      options={{
        strings: ["I'm Chimfwembe Kangwa.",text],
        autoStart: true,
        loop: true,
        cursor: '●', // Use a circle for the cursor
      }}
      className="custom-typewriter-text" // Add a class for custom styling
    />
  </div>
  );
};

export default TypewriterComponent;
