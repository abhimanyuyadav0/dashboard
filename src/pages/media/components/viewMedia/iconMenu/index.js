import React from 'react'
import { Grid, Box, ListItemButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { iconData } from 'pages/media/dummyData';
import Text from 'components/common/text/index';

const IconMenu = ({screenType,setScreenType}) => {
  const theme = useTheme();
  const iconSelectedColor = 'primary.main';
  return (
    <Box sx={{ borderRight: `2px solid ${theme.palette.grey[300]}`, height: '100vh' }} >
    {
      iconData.map((icon, iconIndex) => (
        <ListItemButton key={iconIndex} onClick={() => setScreenType(icon.id)}
          selected={icon.id === screenType}
          sx={{
            flexDirection: 'column',
            '&:hover': {
              bgcolor: 'primary.lighter'
            },
            '&.Mui-selected': {
              bgcolor: 'primary.lighter',
              color: iconSelectedColor,
              '&:hover': {
                color: iconSelectedColor,
                bgcolor: 'primary.lighter'
              }
            },
          }}>
          <Text size={25}>{icon.icon}</Text>
          <Text size={12}>{icon.title}</Text>
        </ListItemButton>
      ))
    }
  </Box>
  )
}

export default IconMenu