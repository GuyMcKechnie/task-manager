import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    },
});

const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, thunkAPI) => {
        // Destructure the email and password from the userData object
        const { email, password } = userData;
        if (email === "test@example.com" && password === "password") {
            return { user: { email }, token: "fakeToken123" };
        } else {
            return thunkAPI.rejectWithValue("Invalid login credentials!");
        }
    }
);

const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, thunkAPI) => {
        const { email } = userData;
        return { user: { email }, token: "fakeToken123" };
    }
);

//  Export the actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
// Login and Register actions
export { loginUser, registerUser };
