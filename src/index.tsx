import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/work',
		element: <Work />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/team',
		element: <Team />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Home />,
// 			},
// 			{
// 				path: '/work',
// 				element: <Work />,
// 			},
// 			{
// 				path: '/about',
// 				element: <About />,
// 			},
// 			{
// 				path: '/team',
// 				element: <Team />,
// 			},
// 			{
// 				path: '/contact',
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
