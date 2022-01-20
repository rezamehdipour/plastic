import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		toggleNavbar: (state, action) => {
			return !state;
		},
	},
});

export const { toggleNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
