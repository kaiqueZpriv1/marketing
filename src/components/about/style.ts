import styled from 'styled-components';

export const About = styled.section`
	margin: 100px 200px 100px 200px;
	.container-about {
		display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px ;
	}
`;

export const AboutImage = styled.div`
	display: flex;
	flex-direction: column;
	.img-1 {
        width: 250px;
	}
	.img-2 {
        width: 250px;
	}
`;

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title-about{
        font-size: 2.5em;
        font-weight: 700;
        text-align: center;
    }
    .paragrafo-about{
        font-size: 1em;
        font-weight: 500;
    }
`