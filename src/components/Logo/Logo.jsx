import { useRef } from "react";

// Redux
import { useSelector } from "react-redux";

// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";
import { makeMagnet, destroyMagnet } from "../../helper/MouseHelper";

// CSS
import "./Logo.scss";

const Logo = (props) => {
	const navbar = useSelector((s) => s.navbar);
	const element = useRef();

	return (
		<a
			href="/"
			id="logo"
			className={`${navbar ? "white" : ""}`}
			onMouseEnter={makeCursorSmall}
			onMouseLeave={makeCursorNormal}
		>
			<h1
				ref={element}
				onMouseMove={(event) => makeMagnet(event, element.current)}
				onMouseOut={(event) => destroyMagnet(event, element.current)}
			>
				Plastic.
			</h1>
		</a>
	);
};

export default Logo;
