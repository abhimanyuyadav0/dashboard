import React from 'react'
import { Box, } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { settingOption } from 'pages/media/dummyData';
import Text from 'components/common/text/index';
import MainCard from 'components/MainCard';

const SelectedSettingList = ({ screenType, setActiveSetting }) => {
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
                    <Box onClick={() => setActiveSetting({ [setting.title]: true })}  sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Text>
                        {setting.title}
                      </Text>
                      <Text>
                        {setting.title}
                      </Text>
                    </Box>
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