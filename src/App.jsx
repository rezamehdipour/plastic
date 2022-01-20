import React from "react";

// Components
import Cursor from "./components/Cursor/Cursor";
import Logo from "./components/Logo/Logo";
import Talk from "./components/Talk/Talk";
import NavbarButton from "./components/NavbarButton/NavbarButton";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

// Sections
import Intro from "./sections/Intro/Intro";

// Images
import SectionHitachiBackgroundPalette from "./images/section-hitachi-background.svg";
import SectionHitachiBackgroundImage from "./images/section-hitachi-image.png";
import SectionIotaBackgroundPalette from "./images/section-iota-background.svg";
import SectionIotaBackgroundImage from "./images/section-iota-image.png";

const App = (props) => {
	return (
		<React.Fragment>
			<Logo />
			<Talk />
			<NavbarButton />
			<Cursor />
			{/* Navbar */}
			<Navbar />
			{/* Intro */}
			<Intro />
			<Section
				backgroundPalette={SectionHitachiBackgroundPalette}
				backgroundImage={SectionHitachiBackgroundImage}
				halfCircleRotate={225}
				halfCircleColor={"#ff3562"}
				subtitle={["Global Design", "Worldwide"]}
				title={["Hitachig Cooling &", "Heating"]}
			/>
			<Section
				backgroundPalette={SectionIotaBackgroundPalette}
				backgroundImage={SectionIotaBackgroundImage}
				halfCircleRotate={45}
				halfCircleColor={"#53D5BC"}
				subtitle={["Web design and branding", "Germany"]}
				title={["IOTA", "Foundation."]}
			/>
		</React.Fragment>
	);
};

export default App;
