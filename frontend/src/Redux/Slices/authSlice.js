import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null, error: null },
    reducers: {
        logout: (state) => {
            state.user = null; // user is removed from the state
            state.token = null; // token is removed from the state
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload.error;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.error = null;
            });
    },
});

const loginUser = createAsyncThunk("/loginUser", async (userData, thunkAPI) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            userData
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});

const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/register",
                userData
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

//  Export the actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
// Login and Register actions
export { loginUser, registerUser };
