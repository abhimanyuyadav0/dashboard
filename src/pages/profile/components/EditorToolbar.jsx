import * as React from "react";
import { Box, Select, IconButton, MenuItem } from "@mui/material";

import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@mui/icons-material/StrikethroughSRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

export default function EditorToolbar(props) {
  const { sx, ...other } = props;
  return (
    <Box
      {...other}
      sx={[
        {
          display: "flex",
          gap: 0.5,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Select size='sm' defaultValue='1' sx={{ minWidth: 160 }}>
        <MenuItem value='1'>Normal text</MenuItem>
        <MenuItem value='2' sx={{ fontFamily: "" }}>
          Code text
        </MenuItem>
      </Select>
      <IconButton size='sm' color='red'>
        <FormatBoldRoundedIcon />
      </IconButton>
      <IconButton size='sm' color='red'>
        <FormatItalicRoundedIcon />
      </IconButton>
      <IconButton size='sm' color='red'>
        <StrikethroughSRoundedIcon />
      </IconButton>
      <IconButton size='sm' color='red'>
        <FormatListBulletedRoundedIcon />
      </IconButton>
    </Box>
  );
}
