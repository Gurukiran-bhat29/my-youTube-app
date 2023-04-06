import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: []
  },
  reducers: {
    saveVidoes: (state, action) => {
      state.videos = action.payload;
    }
  }
})

export const { saveVidoes } = videoSlice.actions;

export default videoSlice.reducer;