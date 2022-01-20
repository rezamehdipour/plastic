// Svg
import HalfCircle from "../../svg/HalfCircle";

// CSS
import "./Section.scss";

const Section = ({
	backgroundPalette,
	backgroundImage,
	halfCircleRotate,
	halfCircleColor,
	subtitle,
	title,
}) => {
	return (
		<section className="section">
			<div className="container">
				<div className="rectangle" style={{ backgroundImage: `url(${backgroundPalette})` }}>
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
					<img src={backgroundImage} className="image" />
				</div>
				<div className="content">
					<div className="subtitle">
						<span>{subtitle[0]}</span>
						<span className="line"></span>
						<span>{subtitle[1]}</span>
					</div>
					<div className="title">
						<h3>{title[0]}</h3>
						<h3>{title[1]}</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section;
