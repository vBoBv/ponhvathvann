import React from 'react';
import SectionHeader from './SectionHeader';
import { Col, Row, Container } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../css/Contact.css'
library.add(
    fab
 )


const gitHubIcon = <FontAwesomeIcon icon={["fab","github"]} />
const linkedinIcon = <FontAwesomeIcon icon={["fab","linkedin"]} />


const Contact = () => {
    return(
        <div id= "Contact">
            <Container>
                <Row>
                    <Col md={4} xs={12}>
                        <SectionHeader section="# Contact" />
                    </Col>
                    <Col md={8} xs={12}>
                        <div className= 'linkStyle'>
                            <span className="pulse">
                            <a 
                                className= 'linkStyle' 
                                href="https://github.com/vBoBv"
                                >
                                {gitHubIcon}
                            </a>
                            </span>
                            <span style = {{marginLeft: '10px', marginRight: '10px'}}></span>
                            <span className="pulse">
                                <a 
                                    className= 'linkStyle'
                                    href="https://www.linkedin.com/in/ponhvath-vann/">
                                    {linkedinIcon}
                                </a>
                            </span>
                            <p className= 'infoContact'>vannponhvath@gmail.com</p>
                            <p className= 'infoContact'>(+64) 212260622</p>
                        </div>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Contact;