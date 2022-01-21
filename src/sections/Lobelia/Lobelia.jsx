// Components
import Section from "../../components/Section/Section";

// Images
import SectionLobeliaPalette from "../../images/section-lobelia-palette.svg";
import SectionLobeliaImage from "../../images/section-lobelia-image.png";

const Lobelia = (props) => {
	return (
		<Section
			palette={SectionLobeliaPalette}
			image={SectionLobeliaImage}
			halfCircleRotate={0}
			halfCircleColor={"#FFFFFF"}
			subtitle={["Web design", "Worldwide"]}
			title={["Lobelia Earth", "website."]}
		/>
	);
};

export default Lobelia;
