import React, { useState } from 'react';
import Cropper from 'react-easy-crop';

const CroppedImage = ({ image, setCroppedImage }) => {
  const [crop, onCropChange] = useState({ x: 0, y: 0 })
  const [zoom, onZoomChange] = useState(1)
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedImage(croppedAreaPixels);
  }
  return (
    <Cropper
      image={image}
      crop={crop}
      zoom={zoom}
      onCropChange={onCropChange}
      onZoomChange={onZoomChange}
      onMediaLoaded={(mediaSize) => {
        // Adapt zoom based on media size to fit max height
        onZoomChange(100 / mediaSize.naturalHeight)
      }}
    // crop={crop}
    // zoom={zoom}
    // aspect={4 / 3}
    // onCropChange={setCrop}
    // onCropComplete={onCropComplete}
    // onZoomChange={setZoom}
    />
  )
}
export default CroppedImage