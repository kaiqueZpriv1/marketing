import styled from 'styled-components';

export const Line = styled.div`
	width: 89px;
	height: 3px;
	flex-shrink: 0;
	border-radius: 1000px;
	border: 2;

	background: linear-gradient(
		90deg,
		#9739c8 1.09%,
		rgba(124, 20, 253, 0.29) 99.99%
	);
	box-shadow: 4px 8px 4px 0px rgba(0, 0, 0, 0.45);
`;
