import { useRef } from "react";

// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";
import { makeMagnet, destroyMagnet } from "../../helper/MouseHelper";

// React Icons
import { BsFillChatRightTextFill } from "react-icons/bs";

// CSS
import "./Talk.scss";

const Talk = (props) => {
	const element = useRef();

	return (
		<div id="letsTalk" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
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
		</div>
	);
};

export default Talk;
