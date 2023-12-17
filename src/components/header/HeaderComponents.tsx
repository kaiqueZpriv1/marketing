import React from 'react';
import { ButtonHeader, Header,  NavHeader, TextHeader } from './style';
import { LogoComponents } from '../LogoComponents';
export const HeaderComponents = () => {
	return (
		<Header>
			<div className='container-header'>
				<LogoComponents/>
				<NavHeader>
					<div className='container-text-header'>
						<TextHeader>Home</TextHeader>
						<TextHeader>Service</TextHeader>
						<TextHeader>Industrie</TextHeader>
						<TextHeader>About Us</TextHeader>
						<TextHeader>Team</TextHeader>
					</div>
					<ButtonHeader>Contact Us</ButtonHeader>
				</NavHeader>
			</div>
		</Header>
	);
};
