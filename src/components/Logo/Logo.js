import React from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <svg width="150" height="auto" viewBox="0 0 70 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill={theme.palette.primary.dark}>
        VEED.IO
      </text>
    </svg>
  );
};

export default Logo;
