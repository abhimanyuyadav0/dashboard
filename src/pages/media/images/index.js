import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MediaCard from '../components/mediaCard/index';
import { CustomButton } from 'components/common/index';
import { openUploadModal } from 'store/reducers/mediaFiles';
import UploadMediaModal from '../components/upload/index';
const AllImages = () => {
  const dispatch = useDispatch();
  const mediaFiles = useSelector((state) => state.mediaFiles.mediaFiles);
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h1" color="text.primary" gutterBottom>
          All Images
        </Typography>
        <CustomButton label={'upload'} onClick={() => dispatch(openUploadModal())} />
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {mediaFiles
            .filter((item) => item.type.startsWith('image/'))
            .map((media, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <MediaCard key={index} {...media} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <UploadMediaModal accept="image/*" />
    </Box>
  );
};

export default AllImages;
