import { useEffect } from "react";

// Redux
import { useSelector } from "react-redux";

// Helper
import { setMouseXY } from "../../helper/MouseHelper";

// CSS
import "./Cursor.scss";

const Mouse = (props) => {
	const navbar = useSelector((s) => s.navbar);

	useEffect(() => {
		window.addEventListener("mousemove", ({ clientX, clientY }) => setMouseXY(clientX, clientY));
	}, []);

	return (
		<div id="cursor" className={`${navbar ? "invert" : ""}`}>
			<div id="cursorText">Scroll</div>
		</div>
	);
};

export default Mouse;
