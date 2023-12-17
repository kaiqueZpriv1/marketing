import React from 'react';
import { HeaderComponents } from '../components/header/HeaderComponents';
import { TeamComponents } from '../components/team/TeamComponents';
import Global from '../style/Global';
export const Team = () => {
	return (
		<>
		<Global/>
			<HeaderComponents />
			<TeamComponents />
		</>
	);
};
