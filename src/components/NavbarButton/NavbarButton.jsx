import { useRef } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navbar/navbarSlice";

// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";
import { makeMagnet, destroyMagnet } from "../../helper/MouseHelper";

// CSS
import "./NavbarButton.scss";

const NavbarButton = (props) => {
	const dispatch = useDispatch();
	const handleToggleNavbar = () => dispatch(toggleNavbar());
	const navbar = useSelector((s) => s.navbar);
	const element = useRef();

	return (
		<div id="navbarButton" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
			<button
				ref={element}
				onMouseMove={(event) => makeMagnet(event, element.current)}
				onMouseOut={(event) => destroyMagnet(event, element.current)}
				onClick={handleToggleNavbar}
			>
				<div className={`lines ${navbar ? "active" : ""}`}>
					<span></span>
					<span></span>
				</div>
			</button>
		</div>
	);
};

export default NavbarButton;
