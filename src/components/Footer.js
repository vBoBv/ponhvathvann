import React from "react";
import {Container, Row, Col} from 'reactstrap';
import '../css/Footer.css';


function Footer() {
    return (
        <div className="footerStyle">
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <div className="">
                            <p className='infoContact' >&copy; 2019 By Ponhvath Vann.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
};

export default Footer;