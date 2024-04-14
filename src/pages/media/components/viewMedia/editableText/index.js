import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import Text from 'components/common/text/index';
import { EditOutlined } from '@ant-design/icons';

const EditableText = ({ media, onSave, name, setMedia, variant = 'span' }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setMedia({ ...media, [name]: event.target.value });
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    onSave(media);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleInputBlur();
    }
  };

  return (
    <Box onClick={() => setIsEditing(true)} sx={{ width: "fit-content" }}>
      {isEditing ? (
        <TextField
          variant="standard"
          autoFocus
          value={media[name]}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Text variant={variant}>{media[name]}</Text>
          <EditOutlined />
        </Box>
      )}
    </Box>
  );
};

export default EditableText;
