import React from 'react';
import { About, AboutImage, AboutText } from './style';
import AboutImg1 from './svg/Frame 20.svg';
import AboutImg2 from './svg/image2.svg';
export const AboutComponents = () => {
	return (
		<About>
			<div className='container-about'>
				<AboutImage>
					<img src={AboutImg1} alt='about' className='img-1' />
					<img src={AboutImg2} alt='about' className='img-2' />
				</AboutImage>
				<AboutText>
					<h3 className='title-about'>Make a Difference For Your Business!</h3>
					<p className='paragrafo-about'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						volutpat accumsan ligula et hendrerit. Vestibulum efficitur iaculis
						ligula, nec gravida augue maximus vel. Integer venenatis erat quis
						malesuada vulputate. Pellentesque et sem sit amet justo sagittis
						sagittis. Fusce nec arcu mattis ligula dignissim pretium in quis
						turpis. Pellentesque vitae lorem cursus, malesuada augue et, euismod
						magna. In sed turpis libero. Aenean id lobortis quam.
						<br />
						<br />
						Pellentesque faucibus egestas felis. Nunc efficitur eros erat, ut
						consectetur orci placerat lobortis. Sed vitae nunc ut purus molestie
						pulvinar nec eu ipsum. Nulla vel interdum velit, id mollis orci.
						Vestibulum pharetra imperdiet ipsum, in mollis diam vestibulum in.
						Praesent cursus, metus vel viverra iaculis, mi nisl fermentum ipsum,
						ac tincidunt diam est a urna. Vivamus faucibus ut ipsum quis
						aliquam.
					</p>
				</AboutText>
			</div>
		</About>
	);
};
