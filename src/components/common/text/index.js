import React, { useEffect, useState } from 'react';
import './text.css';

const Text = ({ children, onClick, size = 16, variant = 'div' }) => {
  const [fontSize, setFontSize] = useState(`${size}px`);
  const Component = variant; // Dynamically select the HTML element based on the 'variant' prop

  useEffect(() => {
    const handleResize = () => {
      let newSize = size;
      if (window.innerWidth <= 767) {
        newSize = size * 0.85; // Reduce font size by 15%
      } else if (window.innerWidth <= 1024) {
        newSize = size * 0.95; // Reduce font size by 5% 
      }
      setFontSize(`${newSize}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);
  const styleSheet = {
    fontSize: fontSize,
    margin: '0px'
  }
  return (
    <Component style={styleSheet} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Text;
