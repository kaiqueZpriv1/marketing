import React from 'react';

import { HeaderComponents } from '../components/header/HeaderComponents';
import { HomeComponents } from '../components/home/HomeComponents';
import Global from '../style/Global';
export const Home = () => {
	return (
		<>
		<Global/>
			<HeaderComponents />
			<HomeComponents />
		</>
	);
};
