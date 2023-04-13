import { createSlice } from "@reduxjs/toolkit";
import { INFINITE_SCROLL_COUNT, SCROLL_OFFSET } from "./constants";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: []
  },
  reducers: {
    saveVidoes: (state, action) => {
      state.videos = action.payload;
    },
    addVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload];

      if (state.videos.length > INFINITE_SCROLL_COUNT) {
        state.videos.splice(0, SCROLL_OFFSET)
      }
    }
  }
})

export const { saveVidoes, addVideos } = videoSlice.actions;

export default videoSlice.reducer;