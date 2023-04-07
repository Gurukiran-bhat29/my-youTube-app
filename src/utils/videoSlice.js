import { createSlice } from "@reduxjs/toolkit";
import { INFINITE_SCROLL_HIGHER_COUNT, INFINITE_SCROLL_LOWER_COUNT } from "./constants";

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
      state.videos = [].concat(...state.videos, action.payload);

      if (state.videos.length > INFINITE_SCROLL_HIGHER_COUNT) {
        state.videos.splice(0, 100)
      } else if (state.videos.length > INFINITE_SCROLL_LOWER_COUNT) {
        state.videos.splice(0, 20)
      }
    }
  }
})

export const { saveVidoes, addVideos } = videoSlice.actions;

export default videoSlice.reducer;