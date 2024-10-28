import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import taskReducer from "./Slices/taskSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskReducer,
    },
});

export default store;
