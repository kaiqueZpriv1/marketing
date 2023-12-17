import React from 'react';
import styled from 'styled-components';
export const LogoComponents = () => {
	const Logo = styled.div`
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
	return (
		<Logo>
			<h3 className='name-logo'>MΛЯKΣƬIПG</h3>
			<p className='secundary-logo'>𝘚𝘛𝘙𝘈𝘛𝘌𝘎𝘠</p>
		</Logo>
	);
};
