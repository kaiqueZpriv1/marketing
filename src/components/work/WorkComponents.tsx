import React from 'react';
import { BoxWork, Work } from './style';

import Work1 from './svg/work1goal.svg';
import Work2 from './svg/work2competitors.svg';
import Work3 from './svg/work3strategy.svg';
import Work4 from './svg/work4launch.svg';
import { Title } from '../Titles';
import { Line } from '../Line';

export const WorkComponents = () => {
	return (
		<Work>
			<Title>How it works</Title>
			<div className='container-work'>
				<BoxWork style={{ marginRight: '300px' }}>
					<img src={Work1} alt='goal' className='image-work' />
					<div className='text-work'>
						<h3 className='title-work'>Goal</h3>
						<Line />
						<p className='paragrafo-work'>
							To help your company grow, we want to understand your goals. With
							that, we can provide you with a complete road map towards
							achieving them.
						</p>
					</div>
				</BoxWork>
				<BoxWork style={{ marginLeft: '300px' }}>
					<img src={Work2} alt='goal' className='image-work' />
					<div className='text-work'>
						<h3 className='title-work'>Competitors</h3>
						<Line />
						<p className='paragrafo-work'>
							Everybody wants to be the best in their field. To achieve success,
							we audit your competitors and find out what is working and what is
							not. All this to help you save time, money, and effort on things
							that do not work and focus on what does.
						</p>
					</div>
				</BoxWork>
				<BoxWork style={{ marginRight: '300px' }}>
					<img src={Work3} alt='goal' className='image-work' />
					<div className='text-work'>
						<h3 className='title-work'>Strategy</h3>
						<Line />
						<p className='paragrafo-work'>
							Understanding the steps needed to beat your competitors is
							essential when understanding the length of the project, and how we
							will effectively tackle your digital marketing.​ We also make sure
							to get you the most value for your money.
						</p>
					</div>
				</BoxWork>
				<BoxWork style={{ marginLeft: '300px' }}>
					<img src={Work4} alt='goal' className='image-work' />
					<div className='text-work'>
						<h3 className='title-work'>Launch</h3>
						<Line />
						<p className='paragrafo-work'>
							Launching everything into action will be the start of your new
							marketing strategy. Taking every step we have planned and
							carefully following the laid-out road map to reach your business
							goals.​
						</p>
					</div>
				</BoxWork>
			</div>
		</Work>
	);
};
