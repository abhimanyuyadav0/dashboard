import MainCard from 'components/MainCard';
import { CustomButton } from 'components/common/index';
import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeMediaFile } from 'store/reducers/mediaFiles';
import { useNavigate } from 'react-router-dom';
import Text from 'components/common/text/index';

const MediaCard = ({ id, name, src, author, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewClick = () => {
    let mediaType = type?.startsWith('image/') ? 'images' : 'videos';
    navigate(`/media/${mediaType}/view/${id}`);
  };
  const styleSheet = {
    maxWidth: '100%',
    borderRadius: '10px',
    objectFit: 'cover'
  }
  return (
    <MainCard sx={{ m: 1}} border={false} boxShadow>
      <Box className="mediaFile" sx={{ textAlign: 'center' }}>
        {type?.startsWith('image/') && <img className="mediaFile" src={src} alt={name} style={styleSheet} />}
        {type?.startsWith('video/') && (
          <video className="mediaFile" controls src={src} style={styleSheet}>
            <track kind="captions" src="" label="Captions" />
          </video>
        )}
      </Box>
      <Text variant='h1'>{name}</Text>
      <Box sx={{mb:1}}>
        {author && <Text variant='span'>By: <Text variant='span' size={13}>{author}</Text></Text>}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomButton label={'views'} onClick={() => handleViewClick()} />
        <Text>||</Text>
        <CustomButton label={'delete'} onClick={() => dispatch(removeMediaFile({ mediaFileId: id }))} />
      </Box>
    </MainCard>
  );
};
export default MediaCard;
