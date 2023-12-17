import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	background: #fafafa;
	box-shadow: 0 0 5px #000;
	width: 100%;
	height: 65px;
	.container-header {
		margin: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Logo = styled.div`
	margin-top: 10px;
	.name-logo {
		color: #343a40;
		font-size: 1.5em;
		letter-spacing: 2px;
	}
	.secundary-logo {
		letter-spacing: 5px;
		font-size: 1em;
		text-align: center;
	}
`;

export const NavHeader = styled.div`
	display: flex;
	gap: 30px;
	.container-text-header {
		margin-top: 5px;
		display: flex;
		gap: 25px;
	}
`;
export const TextHeader = styled.h3`
	font-size: 1.3em;
	color: #343a40;
	font-weight: 600;
	position: relative;
	&:hover {
		transform: scale(1.1);
		color: #9739c8;
	}
	&::before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #9739c8;
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}
	&:hover::before {
		visibility: visible;
		width: 100%;
	}
`;

export const ButtonHeader = styled.button`
	padding: 5px 15px;
	border-radius: 30px;
	border: 1px solid #9739c8;
	color: #9739c8;
	font-size: 1em;
	font-weight: 600;
	&:hover {
		background-color: #9739c8;
		color: #000;
		transform: scale(1.1);
	}
`;
