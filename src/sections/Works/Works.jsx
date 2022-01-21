// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";

// Libreries
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

// CSS
import "./Works.scss";

const Works = (props) => {
	return (
		<motion.section
			id="works"
			initial={{
				clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
				transition: { duration: 0.4 },
			}}
			animate={{
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				transition: { duration: 0.4, delay: 0.5 },
			}}
			exit={{ opacity: 0 }}
		>
			<div className="container">
				<div className="content">
					<div className="center" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
						<a href="/">
							<h6>View more work.</h6>
							<div className="icon">
								<AiOutlineArrowRight />
							</div>
						</a>
					</div>
				</div>
				<div className="footer">
					<p className="copyright">© 2015 Plastic.</p>
					<div className="menu">
						<a href="/" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
							Privacy Policy
						</a>
						<span className="dot">·</span>
						<a href="/" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
							Cookies Policy
						</a>
						<span className="dot">·</span>
						<a href="/" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
							Terms and conditions
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Works;
