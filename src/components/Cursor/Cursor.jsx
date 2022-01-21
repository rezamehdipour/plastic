import { useEffect } from "react";

// Redux
import { useSelector } from "react-redux";

// Helper
import { setMouseXY } from "../../helper/MouseHelper";

// CSS
import "./Cursor.scss";

const Mouse = (props) => {
	const navbar = useSelector((s) => s.navbar);
	const step = useSelector((s) => s.step);

	useEffect(() => {
		window.addEventListener("mousemove", ({ clientX, clientY }) => setMouseXY(clientX, clientY));
	}, []);

	return (
		<div id="cursor" className={`${navbar ? "invert" : ""} ${step > 0 ? "invert" : ""}`}>
			<div id="cursorText">Scroll</div>
		</div>
	);
};

export default Mouse;
