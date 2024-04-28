import React from 'react';
import { Modal} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeUploadModal } from 'store/reducers/mediaFiles';
import UploadCard from './uploadcard';

const UploadMediaModal = ({ accept }) => {
  const dispatch = useDispatch();
  const isUploadModalOpen = useSelector((state) => state.mediaFiles.isUploadModalOpen);

  return (
    <Modal
      open={isUploadModalOpen}
      onClose={() => dispatch(closeUploadModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <UploadCard actionFor='profile' accept={accept} />
    </Modal>
  );
};

export default UploadMediaModal;
