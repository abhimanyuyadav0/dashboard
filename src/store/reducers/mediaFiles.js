import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaFiles: [],
  isUploadModalOpen: false
};

const mediaFilesSlice = createSlice({
  name: 'mediaFiles',
  initialState,
  reducers: {
    addMediaFile(state, action) {
      state.mediaFiles.push(action.payload.mediaFile);
    },
    removeMediaFile(state, action) {
      state.mediaFiles = state.mediaFiles.filter(file => file.id !== action.payload.mediaFileId);
    },
    clearMediaFiles(state) {
      state.mediaFiles = [];
    },
    openUploadModal(state) {
      state.isUploadModalOpen = true;
    },
    closeUploadModal(state) {
      state.isUploadModalOpen = false;
    }
  }
});

export const { addMediaFile, removeMediaFile, clearMediaFiles, openUploadModal, closeUploadModal } = mediaFilesSlice.actions;

export default mediaFilesSlice.reducer;
