import React, { useState } from 'react'
import { Box, } from '@mui/material';
import { settingOption } from 'pages/media/dummyData';
import Text from 'components/common/text/index';
import MainCard from 'components/MainCard';
import ColorPicker from './colorPicker/index';

const SelectedSettingList = ({ screenType, media, activeSetting, setActiveSetting, setMedia }) => {
  const handleColorChange = (newColor) => {
    setMedia(previous => ({
      ...previous,
      style: {
        ...previous.style,
        ...newColor
      }
    }));
  };
  console.log(media, '-----------')
  return (
    <Box>
      {
        settingOption.filter((value) => value.id === screenType)?.map((item, index) => (
          <Box key={index}>
            <Box sx={{ my: 3 }}>
              <Text variant='h1' size={20}>{item.group}</Text>
              {item.component}
            </Box>
            {
              item?.data?.map((setting, settingIndex) => (
                <Box key={settingIndex}>
                  <Text variant='h4'>
                    {setting.title}
                  </Text>
                  <MainCard sx={{ mb: 2 }} border={false} boxShadow>
                    {setting.title === 'background' || setting.title === 'color' ? (
                      <Box
                        onClick={() => setActiveSetting({ [setting.title]: true })}
                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Text>{setting.title}</Text>
                        <ColorPicker name={setting.title} color={media.style?.backgroundColor || '#000000'} onChange={handleColorChange} />
                      </Box>
                    ) : (
                      <>{setting.title}</>
                    )}
                  </MainCard>
                </Box>
              ))
            }
          </Box>
        ))
      }
    </Box>
  )
}

export default SelectedSettingList