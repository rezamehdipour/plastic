// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleNavbar } from "../../redux/navbar/navbarSlice";

// Helper
import { makeCursorSmall, makeCursorNormal } from "../../helper/MouseHelper";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// UUID
import { v4 as uuidv4 } from "uuid";

// CSS
import "./Navbar.scss";

const primaryMenu = ["Work", "Services", "About", "Manifesto", "Contact"];
const socialMedias = [
	{ url: "https://behance.net", name: "Behance" },
	{ url: "https://dribble.come", name: "Dribble" },
	{ url: "https://instagram.com", name: "Instagram" },
	{ url: "https://linkedin.com", name: "Linkedin" },
	{ url: "https://medium.com", name: "Medium" },
	{ url: "https://twitter.com", name: "Twitter" },
];

const Navbar = (props) => {
	const dispatch = useDispatch();
	const navbar = useSelector((s) => s.navbar);

	return (
		<AnimatePresence>
			{navbar ? (
				<motion.div
					id="navbar"
					key={uuidv4()}
					initial={{ y: "-100%" }}
					animate={{ y: 0 }}
					transition={{ duration: 0.7, bounce: 0, ease: "easeInOut" }}
					exit={{
						y: "-100%",
						transition: { delay: 0.8, duration: 0.7, bounce: 0, ease: "easeInOut" },
					}}
				>
					<motion className="background"></motion>
					<div className="container">
						{/* Primary Menu */}
						<ul className="primary-menu">
							{primaryMenu.map((text, index) => (
								<motion.li
									key={uuidv4()}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 + index * 0.1, duration: 0.2, bounce: 0 }}
									exit={{
										opacity: 0,
										y: -20,
										transition: { delay: index * 0.1, duration: 0.2, bounce: 0 },
									}}
								>
									<a
										href="/"
										onMouseEnter={makeCursorSmall}
										onMouseLeave={makeCursorNormal}
									>
										<div className="number">
											<span>0{index + 1}.</span>
										</div>
										<div className="text">{text}.</div>
									</a>
								</motion.li>
							))}
						</ul>

						{/* Secondary Menu */}
						<motion.ul
							className="secondary-menu"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.2, bounce: 0 }}
							exit={{
								opacity: 0,
								y: -20,
								transition: { duration: 0.2, bounce: 0 },
							}}
						>
							{socialMedias.map(({ url, name }) => (
								<li>
									<a
										href={url}
										onMouseEnter={makeCursorSmall}
										onMouseLeave={makeCursorNormal}
									>
										{name}
									</a>
								</li>
							))}
						</motion.ul>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default Navbar;
