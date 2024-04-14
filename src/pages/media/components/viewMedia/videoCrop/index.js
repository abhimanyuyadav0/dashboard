import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const CroppedVideo = ({ image }) => {
  const [file, setFile] = useState()
  const [crop, onCropChange] = useState({ x: 0, y: 0 })
  const [zoom, onZoomChange] = useState(1)
  return (
    <Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      onCropChange={onCropChange}
      onZoomChange={onZoomChange}
      onMediaLoaded={(mediaSize) => {
        onZoomChange(CONTAINER_HEIGHT / mediaSize.naturalHeight)
      }}
    />
  )
}
export default CroppedVideo