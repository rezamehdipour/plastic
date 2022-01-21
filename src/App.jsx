import React, { useEffect, useState, useRef } from "react";
import useUpdateEffect from "./hooks/useUpdateEffect";
import usePrevious from "./hooks/usePrevious";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { increaseStep, decreaseStep } from "./redux/step/stepSlice";

// Libraries
import { AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

// Components
import Cursor from "./components/Cursor/Cursor";
import Logo from "./components/Logo/Logo";
import Talk from "./components/Talk/Talk";
import NavbarButton from "./components/NavbarButton/NavbarButton";
import Navbar from "./components/Navbar/Navbar";

// Sections
import Intro from "./sections/Intro/Intro";
import Design from "./sections/Design/Design";
import Iota from "./sections/Iota/Iota";
import Hitachi from "./sections/Hitachi/Hitachi";
import Strabe from "./sections/Strabe/Strabe";
import Lobelia from "./sections/Lobelia/Lobelia";
import Works from "./sections/Works/Works";

const App = (props) => {
	const dispatch = useDispatch();
	const step = useSelector((s) => s.step);
	const prevStep = usePrevious(step);
	const handleSteps = (wheelEvent) => {
		const wheel = wheelEvent.wheelDelta;
		// previous
		if (wheel > 0) {
			dispatch(decreaseStep());
		}
		// next
		else {
			dispatch(increaseStep());
		}
	};

	useUpdateEffect(() => {
		// previous
		if (step < prevStep) {
			if (step === 0) {
				window.scroll(0, 0);
			}
		}
		// next
		else {
			let _100vhInPixels = Math.round(window.innerHeight);
			if (step === 1) {
				window.scroll(0, _100vhInPixels);
			}
		}
	}, [step]);

	useEffect(() => {
		document.addEventListener("wheel", handleSteps);
		window.scroll(0, 0);
		return () => document.removeEventListener("wheel", handleSteps);
	}, []);

	return (
		<React.Fragment>
			<Logo />
			<Talk />
			<NavbarButton />
			<Cursor />

			{/* ——— Navbar ———— */}
			<Navbar />

			{/* ——— Sections ——— */}
			<Intro />
			<AnimatePresence>
				{step < 2 && <Design key={uuidv4()} />}
				{step === 2 && <Iota key={uuidv4()} />}
				{step === 3 && <Hitachi key={uuidv4()} />}
				{step === 4 && <Strabe key={uuidv4()} />}
				{step === 5 && <Lobelia key={uuidv4()} />}
				{step === 6 && <Works key={uuidv4()} />}
			</AnimatePresence>
		</React.Fragment>
	);
};

export default App;
