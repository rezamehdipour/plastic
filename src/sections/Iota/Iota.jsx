// Components
import Section from "../../components/Section/Section";

// Images
import SectionIotaPalette from "../../images/section-iota-palette.svg";
import SectionIotaImage from "../../images/section-iota-image.png";

const Iota = (props) => {
	return (
		<Section
			palette={SectionIotaPalette}
			image={SectionIotaImage}
			halfCircleRotate={45}
			halfCircleColor={"#53D5BC"}
			subtitle={["Web design and branding", "Germany"]}
			title={["IOTA", "Foundation."]}
		/>
	);
};

export default Iota;
