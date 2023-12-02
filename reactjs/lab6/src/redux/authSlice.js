import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isSignedIn: false,
        userId: '',
    },
    reducers: {
        login: (state, action) => {
            state.isSignedIn = true;
        },
        logout: (state, action) => {
            state.isSignedIn = false;
        },
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;