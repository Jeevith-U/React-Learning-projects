import React, { useState, useEffect } from 'react';
import './App.css';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Welcome</p>
      <p> X : {mousePosition.x} ,  Y : {mousePosition.y}</p>
    </div>
  );
};

export default MouseTracker;
