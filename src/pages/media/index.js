import React from 'react';
import { Box, Grid, Card, ListItemButton, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from 'components/common/index';
import MediaCard from './components/mediaCard/index';
import UploadMediaModal from './components/upload/index';
import { openUploadModal } from 'store/reducers/mediaFiles';
import Text from 'components/common/text/index';
import { useTheme } from '@mui/material/styles';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useNavigate } from 'react-router-dom';

const AllMedia = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mediaFiles = useSelector((state) => state.mediaFiles.mediaFiles);
  const theme = useTheme();
  const handleClickLink = (link) => {
    navigate(link);
  };
  const homeVideoOption = [
    {
      title: "Create Project",
      icon: <ContentCutIcon fontSize="small" color="primary" />,
      link: "/media/recordVideo",
      style: {
        bgcolor: "primary.100",
        color: "primary.800",
      }
    },
    {
      title: "Record Video",
      icon: <VideocamIcon fontSize="small" />,
      link: "/media/recordVideo",
      style: {
        bgcolor: theme.palette.error.lighter,
        color: theme.palette.error.main,
      }
    },
    {
      title: "Go Live",
      icon: <WifiTetheringIcon fontSize="small" color="success" />,
      link: "/media/recordVideo",
      style: {
        bgcolor: "grey.200",
        color: "grey.500",
      }
    },
    {
      title: "Record Podcast",
      icon: <MicNoneOutlinedIcon fontSize="small" sx={{ color: theme.palette.success[500] }} />,
      link: "/media/recordVideo",
      style: {
        bgcolor: theme.palette.error.lighter,
        color: "primary.800",
      }
    },
  ]
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text variant="span" size={20} style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            Let's create some <Text variant="h1" size={22}>Video !</Text>
          </Text>
          <CustomButton label={'upload'} onClick={() => dispatch(openUploadModal())} />
        </Box>
        <Box sx={{ my: 3 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
            {
              homeVideoOption.map((item, index) => (
                <Grid item xs={2} sm={4} md={3} key={index}>
                  <Card sx={{ boxShadow: theme.customShadows.z1, borderRadius: 3 }} shadow>
                    <ListItemButton
                      onClick={() => handleClickLink(item.link)}
                      sx={{
                        gap: 1,

                        '&:hover': {
                          bgcolor: 'primary.lighter'
                        },
                      }}>
                      <Box sx={{ borderRadius: 3, p: 1, px: 2, pt: 1.3, ...item.style, }}>
                        {item.icon}
                      </Box>
                      <Text variant="h6" size={13}>{item.title}</Text>
                    </ListItemButton>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 3 }}>
            <Text variant="span">
              My Recent Video
            </Text>
            <Button>
              <Text variant="span">
                All Videos {`>`}
              </Text>
            </Button>
          </Box>
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
