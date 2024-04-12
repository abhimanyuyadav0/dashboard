import MainCard from 'components/MainCard';
import { CustomButton } from 'components/common/index';
import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeMediaFile } from 'store/reducers/mediaFiles';
import { useNavigate } from 'react-router-dom';

const MediaCard = ({ id, name, src, author, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewClick = () => {
    let mediaType = type.startsWith('image/') ? 'images' : 'videos';
    navigate(`/media/${mediaType}/view/${id}`);
  };
  return (
    <MainCard sx={{ m: 1, backgroundColor: '#ffff0c' }}>
      <Box sx={{ textAlign: 'center' }}>
        {type.startsWith('image/') && <img src={src} alt={name} style={{ maxWidth: '100%', borderRadius: '10px', height: '200px' }} />}
        {type.startsWith('video/') && (
          <video controls src={src} style={{ maxWidth: '100%', borderRadius: '10px', height: '200px' }}>
            <track kind="captions" src="" label="Captions" />
          </video>
        )}
      </Box>
      <h3>{name}</h3>
      {author && <p>By {author}</p>}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CustomButton label={'views'} onClick={() => handleViewClick()} />
        <div>||</div>
        <CustomButton label={'delete'} onClick={() => dispatch(removeMediaFile({ mediaFileId: id }))} />
      </Box>
    </MainCard>
  );
};
export default MediaCard;
