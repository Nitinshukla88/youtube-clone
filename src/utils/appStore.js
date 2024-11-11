import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlices/globalSlice";

const store = configureStore({
    reducer : {
        app : appReducer
    }
});

export default store;