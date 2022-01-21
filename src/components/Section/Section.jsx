// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";

// Libraries
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

// Svg
import HalfCircle from "../../svg/HalfCircle";

// CSS
import "./Section.scss";

const Section = ({ palette, image, halfCircleRotate, halfCircleColor, subtitle, title }) => {
	return (
		<motion.section className="section" exit={{ opacity: 0 }}>
			<div className="container">
				<motion.div
					className="rectangle"
					style={{ backgroundImage: `url(${palette})` }}
					initial={{
						clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
						transition: { duration: 0.4 },
					}}
					animate={{
						clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
						transition: { duration: 0.4, delay: 0.5 },
					}}
				>
					<div className="title">
						<h3>{title[0]}</h3>
						<h3>{title[1]}</h3>
					</div>
					<div
						className="half-circle"
						style={{ transform: `translateY(-50%) rotate(${halfCircleRotate}deg)` }}
					>
						<HalfCircle color={halfCircleColor} />
					</div>
					<img src={image} className="image" />
				</motion.div>

				<div className="content">
					<motion.div
						className="subtitle"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 1, bounce: 0 }}
					>
						<span>{subtitle[0]}</span>
						<span className="line"></span>
						<span>{subtitle[1]}</span>
					</motion.div>
					<motion.div
						className="title"
						initial={{ opacity: 0, y: "-30%" }}
						animate={{ opacity: 1, y: "-50%" }}
						transition={{ ease: "easeOut", duration: 1, bounce: 0 }}
						onMouseEnter={makeCursorSmall}
						onMouseLeave={makeCursorNormal}
					>
						<h3>{title[0]}</h3>
						<h3>{title[1]}</h3>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Section;
