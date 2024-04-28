import React, { useState } from 'react';
import { Box, Button, Typography, Modal, IconButton, Card } from '@mui/material';
import { CloudUploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addMediaFile, closeUploadModal } from 'store/reducers/mediaFiles';

const UploadCard = ({ actionFor, accept }) => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    const uploadedMedia = [];
    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        uploadedMedia.push({
          id: uuidv4(),
          src: URL.createObjectURL(file),
          type: file.type,
          name: file.name,
          author: 'Abhimanyu yadav'
        });
      }
    }
    setFiles(uploadedMedia);
  };

  const handleSave = () => {
    if (files.length === 0) {
      console.log('No media files uploaded. Canceling publish.');
      return;
    }
    if (actionFor == 'profile') {

    } else {
      dispatch(addMediaFile({ mediaFile: files[0] }));
    }
    dispatch(closeUploadModal());
    setFiles([]);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5, p: 3, backgroundColor: 'background.paper', textAlign: 'center' }}>
      <Box>
        {files.map((media, index) => (
          <Box key={index}>
            {media.type.startsWith('image/') && (
              <img
                src={media.src}
                alt={media.name}
                style={{ borderRadius: '10px', maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
              />
            )}
            {media.type.startsWith('video/') && (
              <video controls src={media.src} style={{ borderRadius: '10px', maxWidth: '100%', height: '200px' }}>
                <track kind="captions" src="" label="Captions" />
              </video>
            )}
          </Box>
        ))}
      </Box>
      <IconButton sx={{ width: '100%', height: '100%' }} color="primary" aria-label="upload picture" component="label">
        <input hidden multiple type="file" accept={accept ? accept : ''} onChange={handleFileUpload} />
        <Box>
          <CloudUploadOutlined style={{ fontSize: files.length > 0 ? '40px' : '100px' }} />
        </Box>
        <p>{files.length > 0 && 'Change'}</p>
      </IconButton>
      <Typography variant="body2" color="text.secondary">
        {accept?.startsWith('image/') && <>PNG, JPG, and GIF files are allowed</>}
        {accept?.startsWith('video/') && <>mp4 files are allowed</>}
        {!accept && <>PNG, JPG, GIF and mp4 files are allowed</>}
      </Typography>
      <Typography variant="h6" color="text.primary" gutterBottom sx={{ mt: 2 }}>
        Store your memories
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Stay on the pulse of distributed projects with an online whiteboard to plan, coordinate and discuss.
      </Typography>
      <Button onClick={handleSave} variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Card>
  );
};

export default UploadCard;
