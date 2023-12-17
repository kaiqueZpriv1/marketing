import React from 'react';
import { ButtonHeader, Header, NavHeader, TextHeader } from './style';
import { LogoComponents } from '../LogoComponents';

import { Link } from 'react-router-dom';

export const HeaderComponents = () => {
	return (
		<Header>
			<div className='container-header'>
				<Link to='/'>
					<LogoComponents />
				</Link>
				<NavHeader>
					<div className='container-text-header'>
						{/* <TextHeader> */}
						<Link to='/'>
							<TextHeader>Home</TextHeader>
						</Link>
						{/* </TextHeader> */}
						{/* <TextHeader> */}
						<Link to='/work'>
							<TextHeader>Work</TextHeader>
						</Link>
						{/* </TextHeader> */}
						{/* <TextHeader> */}
						<Link to='/about'>
							<TextHeader>About Us</TextHeader>
						</Link>
						{/* </TextHeader> */}
						{/* <TextHeader> */}
						<Link to='/team'>
							<TextHeader>Team</TextHeader>
						</Link>
						{/* </TextHeader> */}
					</div>
					<ButtonHeader>
						<Link to='/contact'>Contact</Link>
					</ButtonHeader>
				</NavHeader>
			</div>
		</Header>
	);
};
