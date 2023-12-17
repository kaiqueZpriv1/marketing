import React from 'react';
import { Team, TeamBox } from './style';
import { AiOutlineUser } from 'react-icons/ai';
import { TeamList } from '../../data/TeamList';

export const TeamComponents = () => {
	return (
		<Team>
			<div className='container-team'>
				{TeamList.map((item) => (
					<TeamBox key={item.id}>
						{/* <div className='image-team'> */}
							<AiOutlineUser size={75} className='icon-person' />
						{/* </div> */}
						<h3 className='title-team'>{item.name}</h3>
						<p className='biografia-team'>{item.biografia}</p>
					</TeamBox>
				))}
			</div>
		</Team>
	);
};
