import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name : "search", 
    initialState : {

    },
    reducers : {
        cacheSuggestion : (state, action) => {
            //  state = Object.assign(state, action.payload);  instead of this do below thing, even though it's working fine
            Object.assign(state, action.payload);
        },
    }

});

export const { cacheSuggestion } = searchSlice.actions;

export default searchSlice.reducer;