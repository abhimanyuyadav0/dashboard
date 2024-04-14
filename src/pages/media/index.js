import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from 'components/common/index';
import MediaCard from './components/mediaCard/index';
import UploadMediaModal from './components/upload/index';
import { openUploadModal } from 'store/reducers/mediaFiles';
import Text from 'components/common/text/index';

const AllMedia = () => {
  const dispatch = useDispatch();
  const mediaFiles = useSelector((state) => state.mediaFiles.mediaFiles);

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text variant="span" >
            Let's create some <Text variant="span">Video</Text>
          </Text>
          <CustomButton label={'upload'} onClick={() => dispatch(openUploadModal())} />
        </Box>
        <Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mediaFiles.map((media, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                {(media.type.startsWith('image/') || media.type.startsWith('video/')) && <MediaCard key={index} {...media} />}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <UploadMediaModal />
    </Box>
  );
};

export default AllMedia;
