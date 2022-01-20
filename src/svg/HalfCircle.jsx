const HalfCircle = ({ color }) => {
	return (
		<svg viewBox="0 0 250 502" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g transform="translate(-118.000000, -35.000000)" fill={color}>
					<path
						d="M242.829132,160.970868 L493.629132,160.970868 C493.629132,298.85332 381.342147,410.629132 242.829132,410.629132 C104.316116,410.629132 -7.97086835,298.85332 -7.97086835,160.970868 L242.829132,160.970868 Z"
						transform="translate(242.829132, 285.800000) scale(-1, 1) rotate(90.000000) translate(-242.829132, -285.800000) "
					></path>
				</g>
			</g>
		</svg>
	);
};

export default HalfCircle;
