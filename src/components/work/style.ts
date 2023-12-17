import styled from 'styled-components';

export const Work = styled.section`
	padding: 150px 0 0 0;
	.container-work {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const BoxWork = styled.div`
	display: flex;
	width: 700px;
	.image-work {
		width: 200px;
	}
	.text-work {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title-work {
		text-shadow: 12px 8px 6px rgba(0, 0, 0, 0.45);
		font-size: 1.5em;
		width: 100px;
		color: #9739c8;
		font-weight: 700;
	}
	.paragrafo-work {
		font-size: 0.9em;
		color: #343a40;
		font-weight: 500;
	}
`;
