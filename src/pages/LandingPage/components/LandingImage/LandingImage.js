import styled from "styled-components";

import LandingPageImage from "../../../../assets/img/LandingPageImage.svg";

const BackgroundWrapper = styled.div`
	padding: 60px;
	img {
		height: 600px;
	}
`;

const LandingImage = () => {
	return (
		<BackgroundWrapper>
			<img src={LandingPageImage} alt="Landing Image" />
		</BackgroundWrapper>
	);
};

export default LandingImage;
