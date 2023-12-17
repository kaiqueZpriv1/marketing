import React from 'react';
import { HeaderComponents } from '../components/header/HeaderComponents';
import { WorkComponents } from '../components/work/WorkComponents';
import Global from '../style/Global';
export const Work = () => {
	return (
		<>
			<Global/>
			<HeaderComponents />
			<WorkComponents />
		</>
	);
};
