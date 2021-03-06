// Components
import Section from "../../components/Section/Section";

// Images
import SectionDesignPalette from "../../images/section-design-palette.svg";
import SectionDesignImage from "../../images/section-design-image.png";

const Design = ({ invisible }) => {
	return (
		<Section
			palette={SectionDesignPalette}
			image={SectionDesignImage}
			halfCircleRotate={180}
			halfCircleColor="#FFEEB5"
			subtitle={["iPad Application", "Worlwide"]}
			title={["Desigual", "Look Book"]}
			invisible={invisible}
		/>
	);
};

export default Design;
