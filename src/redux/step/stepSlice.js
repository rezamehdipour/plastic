import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const stepSlice = createSlice({
	name: "step",
	initialState,
	reducers: {
		increaseStep: (state, action) => {
			if (state < 6) {
				return state + 1;
			}
			return state;
		},
		decreaseStep: (state, action) => {
			if (state > 0) {
				return state - 1;
			}
			return state;
		},
	},
});

export const { increaseStep, decreaseStep } = stepSlice.actions;

export default stepSlice.reducer;
