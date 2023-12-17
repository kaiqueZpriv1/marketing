import styled from 'styled-components';

export const Team = styled.section`
	background-color: #9739c8;
	padding: 50px 0;
	.container-team {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;

export const TeamBox = styled.div`
	width: 400px;
	background-color: #ced4da;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 5px;
	box-shadow: 0 0 10px #000;
	border-radius: 10px;
	padding: 10px;
	.icon-person {
		box-shadow: 0 0 5px #9739c8;
		border-radius: 50px;
		padding: 10px;
	}
	.title-team {
		font-size: 1.5em;
		font-weight: 700;
	}
	.biografia-team {
		font-size: 1em;
		font-weight: 500;
		text-align: center;
	}
`;
