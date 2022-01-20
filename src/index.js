import React from "react";
import ReactDOM from "react-dom";

// Redux
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";

// Components
import App from "./App";

// CSS
import "./predefined.css";
import "./reset.css";
import "./index.scss";

ReactDOM.render(
	<ReduxProvider store={store}>
		<App />
	</ReduxProvider>,
	document.getElementById("root")
);
