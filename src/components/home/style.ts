import styled from 'styled-components';

export const Home = styled.main`
	padding-top: 150px;
	.container-home {
		display: flex;
	}
`;

export const SectionTexts = styled.div`
	margin-left: 40px;
	width: 500px;
	display: flex;
	flex-direction: column;
	.text-home {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title-home {
		font-size: 3.5em;
		color: #343a40;
		font-weight: 700;
	}
	.subTitle {
		color: #9739c8;
		margin-left: 15px;
	}
	.paragrafo-home {
		font-size: 1em;
		font-weight: 500;
		color: #343a40;
	}
`;

export const ButtonHome = styled.div`
	margin: 30px 0 0 0;
	display: flex;
	gap: 30px;
	.btn-home {
		padding: 10px 15px;
		font-size: 1.5em;
		border: #9739c8;
		border-radius: 10px;
		color: #fafafa;
		background: #9739c8;
	}
	.btn1 {
		border: 2px solid #9739c8;
		color: #9739c8;
		background: #fafafa;
	}
	.btn2:hover {
		border: 2px solid #9739c8;
		background: #fafafa;
		color: #9739c8;
	}
	.btn1:hover {
		color: #fafafa;
		background: #9739c8;
	}
`;

export const ImageHome = styled.div`
	.image-home {
		width: 600px;
		position: absolute;
		top: 50px;
		right: 90px;
	}
`;

export const BoxColaboradores = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 130px 0 0 0;
	.img-colaborador {
		width: 150px;
	}
`;
