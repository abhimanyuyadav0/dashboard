import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLogin: false
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.unshift(action.payload.mediaFile);
    },
    removeUser(state, action) {
      state.users = state.users.filter(file => file.id !== action.payload.userId);
    },
    updateUser(state, action) {
      const { userId, newData } = action.payload;
      const index = state.users.findIndex(file => file.id === userId);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...newData };
      }
    },
    clearusers(state) {
      state.users = [];
    },
  }
});

export const { addUser, removeUser, updateUser, clearusers } = usersSlice.actions;

export default usersSlice.reducer;
