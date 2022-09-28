import styled from "styled-components";

const SmallButton = styled.button`
	width: 300px;
	margin: 20px;
	padding: 10px;
	cursor: pointer;
	border-radius: 10px;
	font-weight: bold;
	font-size: 20px;
	color: white;
	background: linear-gradient(to right, #8456ec, #e87bf8);
	border: none;
	@media (min-width: 1024px) {
		display: none;
	}
`;

export default SmallButton;
