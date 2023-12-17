import React from 'react';
import {
	BoxColaboradores,
	ButtonHome,
	Home,
	ImageHome,
	SectionTexts,
} from './style';
import HomeImage from './svg/home.svg';

import Colaborador1 from './svg/colaboradores/collaborator.svg';
import Colaborador2 from './svg/colaboradores/collaborator2.svg';
import Colaborador3 from './svg/colaboradores/collaborator3.svg';
export const HomeComponents = () => {
	const ListColaborador = [
		{
			id: 0,
			image: Colaborador1,
		},
		{
			id: 1,
			image: Colaborador2,
		},
		{
			id: 2,
			image: Colaborador3,
		},
	];
	return (
		<Home>
			<div className='container-home'>
				<SectionTexts>
					<div className='text-home'>
						<h1 className='title-home'>
							We help you grow your
							<span className='subTitle'>conversions...</span>
						</h1>
						<p className='paragrafo-home'>
							Featured in leading publications around the world
						</p>
					</div>
					<ButtonHome>
						<button className='btn-home btn1'>Services</button>
						<button className='btn-home btn2'>Contact Us</button>
					</ButtonHome>
				</SectionTexts>
				<ImageHome>
					<img src={HomeImage} alt='animationImage' className='image-home' />
				</ImageHome>
			</div>
			<BoxColaboradores>
				{ListColaborador.map((colab) => {
					return (
						<img
							key={colab.id}
							src={colab.image}
							className='img-colaborador'
							alt='colab'
						/>
					);
				})}
			</BoxColaboradores>
		</Home>
	);
};
