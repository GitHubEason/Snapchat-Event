import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.span`
	font-weight: 700;
	font-size: 64px;
	line-height: 64px;
	text-align: right;
	@media (max-width: 1024px) {
		padding-top: 40px;
		text-align: center;
		font-size: 50px;
	}
`;

const HightLight = styled.span`
	background: linear-gradient(to right, #8456ec, #e87bf8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const SubTitle = styled.span`
	font-weight: 300;
	font-size: 24px;
	text-align: right;
	color: #4f4f4f;
	@media (max-width: 1024px) {
		text-align: center;
	}
	@media (min-width: 1024px) {
		padding: 10px 0 40px 0;
	}
`;

const Titles = () => {
	return (
		<Wrapper>
			<Title>
				Imagine if
				<br />
				<HightLight>Snapchat</HightLight>
				<br />
				had events.
			</Title>
			<SubTitle>Easily host and share events with your friends across any social media.</SubTitle>
			<br />
		</Wrapper>
	);
};

export default Titles;
