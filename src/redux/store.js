import { configureStore } from "@reduxjs/toolkit";

// Slices
import navbarReducer from "./navbar/navbarSlice";

export default configureStore({
	reducer: {
		navbar: navbarReducer,
	},
});
