import React from 'react';
import { HeaderComponents } from '../components/header/HeaderComponents';
import { ContactComponents } from '../components/contact/ContactComponents';
import Global from '../style/Global';
export const Contact = () => {
	return (
		<>
		<Global/>
			<HeaderComponents />
			<ContactComponents />
		</>
	);
};
