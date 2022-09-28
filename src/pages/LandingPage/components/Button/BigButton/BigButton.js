import styled from "styled-components";

const BigButton = styled.button`
	padding-top: 50px;
	padding: 10px;
	cursor: pointer;
	border-radius: 10px;
	font-weight: bold;
	font-size: 20px;
	color: white;
	width: 320px;
	background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
	border: none;
	@media (max-width: 1024px) {
		display: none;
	}
`;

export default BigButton;
