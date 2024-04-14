import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import Text from 'components/common/text/index';
import { openDrawer } from 'store/reducers/menu';
import { useTheme } from '@mui/material/styles';
import CroppedVideo from './videoCrop/index';
import CroppedImage from './imageCrop/index';
import IconMenu from './iconMenu/index';
import SelectedSettingList from './selectedSettingList/index';
import { updateMediaFile } from 'store/reducers/mediaFiles';
import EditableText from '../editableText/index';

const ViewMedia = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { id } = useParams();
  const [media, setMedia] = useState({ style: { backgroundColor: '#000000', color: '' } });
  const [open] = useState(false);
  const [screenType, setScreenType] = useState('setting');
  const [activeSetting, setActiveSetting] = useState({});
  const [croppedImage, setCroppedImage] = useState(null);

  dispatch(openDrawer({ drawerOpen: open }));
  const mediaFiles = useSelector((state) => state.mediaFiles.mediaFiles);

  const findMediaFileById = () => {
    let foundMediaFile = mediaFiles.find((file) => file.id === id);
    setMedia(foundMediaFile);
  }

  useEffect(() => {
    findMediaFileById();
  }, [mediaFiles]);

  const handleMediaDataChange = (data) => {
    dispatch(updateMediaFile({ mediaFileId: media.id, newData: data }));
  };
  return (
    <Box sx={{}}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        <Grid item xs={1} sm={1} md={1}>
          <IconMenu setScreenType={setScreenType} screenType={screenType} />
        </Grid>
        <Grid item xs={3} sm={4} md={5} sx={{ px: 4, borderRight: `2px solid ${theme.palette.grey[300]}` }}>
          <SelectedSettingList
            setMedia={setMedia}
            media={media}
            screenType={screenType}
            activeSetting={activeSetting}
            setActiveSetting={setActiveSetting}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={10} sx={{ p: 4 }}>
          <Box sx={{ ...media.style, p: 2, borderRadius: 4 }}>
            <Box sx={{ mb: 4 }}>
              <EditableText media={media} setMedia={setMedia} name="name" onSave={handleMediaDataChange} />
            </Box>
            <Box className="mediaFileEditView" sx={{ textAlign: 'center', position: 'relative' }}>
              {media?.type?.startsWith('image/') &&
                <>
                  {
                    activeSetting?.crop ?
                      <CroppedImage
                        image={media.src}
                        setCroppedImage={setCroppedImage}
                      />
                      :
                      <img className="mediaFileEditView" src={media?.src} alt={media?.name} />
                  }
                </>
              }
              {media?.type?.startsWith('video/') && (
                <>
                  {
                    activeSetting?.crop ?
                      <CroppedVideo
                        image={media.src}
                      />
                      :
                      <video className="mediaFileEditView" height={'300px'} controls src={media.src}>
                        <track kind="captions" src="" label="Captions" />
                      </video>
                  }
                </>
              )}
            </Box>
            <Box>
              {croppedImage && (
                <Box sx={{ mb: 1 }}>
                  <img src={croppedImage} alt="Cropped" />
                </Box>
              )}
            </Box>
            <Box sx={{ mb: 1 }}>
              {media?.author &&
                <>
                  <Text variant='span' size={13}>By: </Text>
                  <EditableText media={media} variant='span' setMedia={setMedia} name="author" onSave={handleMediaDataChange} />
                </>
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewMedia;
