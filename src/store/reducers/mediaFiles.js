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
      state.mediaFiles.unshift(action.payload.mediaFile);
    },
    removeMediaFile(state, action) {
      state.mediaFiles = state.mediaFiles.filter(file => file.id !== action.payload.mediaFileId);
    },
    updateMediaFile(state, action) {
      const { mediaFileId, newData } = action.payload;
      const index = state.mediaFiles.findIndex(file => file.id === mediaFileId);
      if (index !== -1) {
        state.mediaFiles[index] = { ...state.mediaFiles[index], ...newData };
      }
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

export const { addMediaFile, removeMediaFile, updateMediaFile, clearMediaFiles, openUploadModal, closeUploadModal } = mediaFilesSlice.actions;

export default mediaFilesSlice.reducer;
