import React from 'react';
import { Contact, ContatoMain } from './style';
import { LogoComponents } from '../LogoComponents';

export const ContactComponents = () => {
	return (
		<Contact>
			<div className='container-ctt'>
                <ContatoMain>
                    <LogoComponents/>
                </ContatoMain>
				<ContatoMain>
					<h3 className='title-ctt'>Redes Sociais</h3>
					<p className='paragrafo-main'>Email</p>
					<p className='paragrafo-main'>WhatsApp</p>
					<p className='paragrafo-main'>Facebook</p>
					<p className='paragrafo-main'>Instagram</p>
					<p className='paragrafo-main'>Linkedin</p>
				</ContatoMain>
				<ContatoMain>
					<h3 className='title-ctt'>Service</h3>
					<p className='paragrafo-main'>Industrie</p>
					<p className='paragrafo-main'>About Us</p>
					<p className='paragrafo-main'>Team</p>
				</ContatoMain>
				<ContatoMain>
					<h3 className='title-ctt'>Company</h3>
					<p className='paragrafo-main'>CNPJ: 99.999.999/0001-99</p>
					<p className='paragrafo-main'>Marketing Strategy LTDA</p>
					<p className='paragrafo-main'>Orlando, EUA</p>
				</ContatoMain>
			</div>
		</Contact>
	);
};
