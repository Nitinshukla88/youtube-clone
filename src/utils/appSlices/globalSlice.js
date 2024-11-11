import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
});

export const { toggleMenu } = globalSlice.actions;

export default globalSlice.reducer;