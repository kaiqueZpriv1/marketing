import styled from 'styled-components';

export const Contact = styled.section`
	padding: 100px 0 30px 0;
	.container-ctt {
		display: flex;
        justify-content: space-around;
	}
`;

export const ContatoMain = styled.div`
	display: flex;
	flex-direction: column;
	.title-ctt {
		font-size: 1.5em;
		font-weight: 800;
		color: #000;
        margin-bottom: 20px;
	}
	.paragrafo-ctt {
		font-size: 1em;
		font-weight: 500;
		color: #999999;
	}
`;
