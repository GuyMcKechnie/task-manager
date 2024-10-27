import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user; // state.user is assigned the value of the payload user
            state.token = action.payload.token; // state.token is assigned the value of the payload token
        },
        logout: (state) => {
            state.user = null; // user is removed from the state

            state.token = null; // token is removed from the state
        },
    },
});

//  Export the actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
