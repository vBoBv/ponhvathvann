import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const headerStyle = {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '50px',
    color: 'black',
    borderBottom: '5px solid black',
    borderRight: '10px solid black',
    fontFamily: "'Faster One', cursive"
};

const SectionHeader = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h5 style= {headerStyle}> {props.section} </h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SectionHeader;