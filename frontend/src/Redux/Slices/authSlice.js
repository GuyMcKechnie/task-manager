import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null, error: null, success: null },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            state.success = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.error = null;
                    state.success = "Logged in sucessfully!";
                } else {
                    state.error = action.payload.error;
                    state.success = null;
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = "Login failed. Please try again.";
                state.success = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.error = null;
                    state.success = "Registered sucessfully!";
                } else {
                    state.error = action.payload.error;
                    state.success = null;
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = "Register failed. Please try again.";
                state.success = null;
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
