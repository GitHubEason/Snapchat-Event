import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Form from "./components/EventForm";

const CreateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	height: 100%;
	@media (max-width: 768px) {
		align-items: center;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
`;

const CancelButton = styled.button`
	padding: 20px;
	border: none;
	background: none;
	font-size: 18px;
	color: #888888;
	cursor: pointer;
`;

function Create() {
	const navigate = useNavigate();

	return (
		<CreateWrapper>
			<HeaderContainer>
				<CancelButton onClick={() => navigate("/")}>Cancel</CancelButton>
			</HeaderContainer>
			<Form />
		</CreateWrapper>
	);
}
export default Create;
