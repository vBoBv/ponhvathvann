import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Container, Row, Col } from 'reactstrap';
import '../css/LandingSection.css';

library.add(fab);

//Styles
const gitHubIcon = <FontAwesomeIcon icon={['fab', 'github']} />;
const linkedinIcon = <FontAwesomeIcon icon={['fab', 'linkedin']} />;
const linkStyle = {
	color: 'black',
	textAlign: 'center',
	fontSize: '40px'
};

const LandingSection = () => {
	return (
		<div>
			<div className='parallaxBackground'>
				<Container>
					<Row>
						<Col>
							<div className='aboutMeBox'>
								<p style={{ textAlign: 'center' }}>
									<span style={{ fontSize: '3rem' }} className='aboutMeStyle'>
										Ponhvath Vann
									</span>
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className='creatorName'>Front-End Developer</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div style={linkStyle}>
								<span className='pulse'>
									<a style={linkStyle} href='https://github.com/vBoBv'>
										{gitHubIcon}
									</a>
								</span>
								<span style={{ marginLeft: '10px', marginRight: '10px' }}></span>
								<span className='pulse'>
									<a style={linkStyle} href='https://www.linkedin.com/in/ponhvath-vann/'>
										{linkedinIcon}
									</a>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default LandingSection;
