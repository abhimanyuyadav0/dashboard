import React, { useEffect, useState } from 'react';
import './text.css';

const Text = ({ children, onClick, style, size = 16, variant = 'div', color }) => {
  const [fontSize, setFontSize] = useState(`${size}px`);
  const Component = variant;

  useEffect(() => {
    const handleResize = () => {
      let newSize = size;
      if (window.innerWidth <= 767) {
        newSize = size * 0.85;
      } else if (window.innerWidth <= 1024) {
        newSize = size * 0.95;
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
    margin: '0px',
    color: color,
    ...style
  }
  return (
    <Component style={styleSheet} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Text;
