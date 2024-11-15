import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : "video",
    initialState : {
        videos : [],
    },
    reducers : {
        addVideos: (state, action) => {
            state.videos.push(...action.payload);
        }
    }
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;

