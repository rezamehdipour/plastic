// Components
import Section from "../../components/Section/Section";

// Images
import SectionHitachiPalette from "../../images/section-hitachi-palette.svg";
import SectionHitachiImage from "../../images/section-hitachi-image.png";

const Hitachi = (props) => {
	return (
		<Section
			palette={SectionHitachiPalette}
			image={SectionHitachiImage}
			halfCircleRotate={225}
			halfCircleColor={"#ff3562"}
			subtitle={["Global Design", "Worldwide"]}
			title={["Hitachig Cooling &", "Heating"]}
		/>
	);
};

export default Hitachi;
