import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlices/globalSlice";
import searchReducer from "./appSlices/searchSlice";
import videoReducer from "./appSlices/videoSlice";

const store = configureStore({
    reducer : {
        app : appReducer,
        search : searchReducer,
        video : videoReducer

    }
});

export default store;