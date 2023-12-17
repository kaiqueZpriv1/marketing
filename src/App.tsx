import React from 'react';
import Global from './style/Global';
import { HeaderComponents } from './components/header/HeaderComponents';
import { HomeComponents } from './components/home/HomeComponents';
import { WorkComponents } from './components/work/WorkComponents';
import { AboutComponents } from './components/about/AboutComponents';
import { TeamComponents } from './components/team/TeamComponents';
import { ContactComponents } from './components/contact/ContactComponents';

function App() {
	return (
		<div className='App'>
			<Global />
			<HeaderComponents />
			<HomeComponents />
			<WorkComponents />
			<AboutComponents/>
			<TeamComponents />
			<ContactComponents/>
		</div>
	);
}

export default App;
