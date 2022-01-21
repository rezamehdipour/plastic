import { useEffect, useState, useRef } from "react";

// Helpers
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";
import { makeMagnet, destroyMagnet } from "../../helper/MouseHelper";

// Libraries
import { BsArrowLeft } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";

// CSS
import "./Intro.scss";

const introAnimatedLetters = [
	// Digital-first brands.
	["d", "i", "g", "i", "t", "a", "l", "-", "f", "i", "r", "s", "t", " ", "b", "r", "a", "n", "d", "s", "."],
	// Digital products.
	["d", "i", "g", "i", "t", "a", "l", " ", "p", "r", "o", "d", "u", "c", "t", "s", "."],
	// Digital experiences.
	["d", "i", "g", "i", "t", "a", "l", " ", "e", "x", "p", "e", "r", "i", "e", "n", "c", "e", "s", "."],
];

const Intro = (props) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const animatedLettersIndex = useRef(0);
	const handleChangeAnimatedLettersIndex = () => {
		setIsAnimating(true);
		if (animatedLettersIndex.current === introAnimatedLetters.length - 1) {
			animatedLettersIndex.current = 0;
		} else {
			animatedLettersIndex.current += 1;
		}
		setIsAnimating(false);
	};

	// componentDidMount
	useEffect(() => {
		const changeAnimatedLettersInterval = setInterval(() => {
			handleChangeAnimatedLettersIndex();
		}, 4000);

		// componentWillUnmount
		return () => clearInterval(changeAnimatedLettersInterval);
	}, []);
	const element = useRef();

	return (
		<section id="intro">
			<div className="scroll" onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
				<div
					className="wrapper"
					ref={element}
					onMouseMove={(event) => makeMagnet(event, element.current)}
					onMouseOut={(event) => destroyMagnet(event, element.current)}
				>
					<div className="icon">
						<BsArrowLeft />
					</div>
					<div className="text">Scroll</div>
				</div>
			</div>
			<div className="container">
				<div className="wrapper">
					<h2>Plastic is a international design agency.</h2>

					<h1>
						<div className="main">We create remarkable</div>
						<div className="animated">
							<AnimatePresence exitBeforeEnter>
								{!isAnimating && (
									<motion.div
										className="flex"
										key={uuidv4()}
										exit={{ opacity: 0, y: -5, transition: { duration: 0.5 } }}
									>
										{introAnimatedLetters[animatedLettersIndex.current].map(
											(letter, index) => (
												<motion.span
													key={uuidv4()}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{
														duration: 0.5,
														delay: index * 0.05,
														ease: "backOut",
													}}
													dangerouslySetInnerHTML={
														letter === " " ? { __html: "&nbsp;" } : null
													}
												>
													{letter === " " ? null : letter}
												</motion.span>
											)
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</h1>

					<div className="showreel">
						<button onMouseEnter={makeCursorSmall} onMouseLeave={makeCursorNormal}>
							Our showreel
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
