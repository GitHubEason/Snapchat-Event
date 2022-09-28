import styled from "styled-components";
import { Link } from "react-router-dom";

import LandingImage from "./components/LandingImage/";
import Titles from "./components/Titles/";
import SmallButton from "./components/Button/SmallButton";
import BigButton from "./components/Button/BigButton";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 850px;
	width: 100%;
	background-color: #e9dfff;
	@media (max-width: 1024px) {
		height: 100%;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
const MobileWrapper = styled.div`
	display: flex;
	@media (max-width: 1024px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
`;

const Container = styled.div`
	margin: 0;
	max-width: 400px;
	padding: 0 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (min-width: 1024px) {
		padding-left: 300px;
		justify-content: center;
		align-items: flex-end;
	}
`;

const LandingPage = () => {
	return (
		<Wrapper>
			<MobileWrapper>
				<LandingImage />
				<Container>
					<Titles />
					<Link to="/create">
						<BigButton>🎉 Create my event</BigButton>
					</Link>
				</Container>
			</MobileWrapper>
			<Link to="/create">
				<SmallButton>🎉 Create my event</SmallButton>
			</Link>
		</Wrapper>
	);
};

export default LandingPage;
