import { configureStore } from "@reduxjs/toolkit";

// Slices
import navbarReducer from "./navbar/navbarSlice";
import stepReducer from "./step/stepSlice";

export default configureStore({
	reducer: {
		navbar: navbarReducer,
		step: stepReducer,
	},
});
