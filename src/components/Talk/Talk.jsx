import { useRef } from "react";

// Redux
import { useSelector } from "react-redux";

// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";
import { makeMagnet, destroyMagnet } from "../../helper/MouseHelper";

// React Icons
import { BsFillChatRightTextFill } from "react-icons/bs";

// CSS
import "./Talk.scss";

const Talk = (props) => {
	const step = useSelector((s) => s.step);
	const element = useRef();

	return (
		<a
			href="/"
			id="letsTalk"
			className={`${step === 6 ? "white" : ""}`}
			onMouseEnter={makeCursorSmall}
			onMouseLeave={makeCursorNormal}
		>
			<div
				className="wrapper"
				ref={element}
				onMouseMove={(event) => makeMagnet(event, element.current)}
				onMouseOut={(event) => destroyMagnet(event, element.current)}
			>
				<div className="icon">
					<BsFillChatRightTextFill />
				</div>
				<h6>Lets talk</h6>
			</div>
		</a>
	);
};

export default Talk;
