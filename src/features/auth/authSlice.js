import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        accessToken: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
});

export const { setToken, setUser, logout, toggleLoading } = authSlice.actions;

export default authSlice.reducer;