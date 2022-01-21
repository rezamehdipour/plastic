// Components
import Section from "../../components/Section/Section";

// Images
import SectionStrabePalette from "../../images/section-strabe-palette.svg";
import SectionStrabeImage from "../../images/section-strabe-image.png";

const Strabe = (props) => {
	return (
		<Section
			palette={SectionStrabePalette}
			image={SectionStrabeImage}
			halfCircleRotate={135}
			halfCircleColor={"#372FFF"}
			subtitle={["Product and branding design", "Worldwide"]}
			title={["Sträbe retail", "community"]}
		/>
	);
};

export default Strabe;
