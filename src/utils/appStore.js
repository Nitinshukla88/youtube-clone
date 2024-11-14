import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlices/globalSlice";
import searchReducer from "./appSlices/searchSlice";

const store = configureStore({
    reducer : {
        app : appReducer,
        search : searchReducer
    }
});

export default store;