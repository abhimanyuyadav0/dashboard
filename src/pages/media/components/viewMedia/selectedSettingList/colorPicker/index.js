import React, { useState } from 'react';
import { Box, Popover, Grid, IconButton } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const ColorPicker = ({ color = "#000000", onChange,name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(color);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    if (onChange) {
      onChange({[name]:newColor});
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'color-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ColorLensIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Grid container justifyContent="center">
            <input type="color" value={selectedColor} onChange={handleChange} />
          </Grid>
        </Box>
      </Popover>
    </div>
  );
};

export default ColorPicker;
