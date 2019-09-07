import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import '../css/Project.css';

class Project extends React.Component {

    renderProjectList() {
        return this.props.projects.map( project => {
            return (
                <Col md={6} key={project.projectTitle}>
                    <div className= "projectContainerCSS">
                        <div className="projectTitleStyle">
                            <h5 className="projectHeadingStyle">{project.projectTitle}</h5>
                        </div>
                        <div className="imageStyle">
                            <img src={project.gif} alt={project.projectTitle} className='gifWidthProp' />
                        </div>
                        <div className='linkStyle'>
                            <Button outline color="info" style = {{marginLeft: '4px'}} href={project.demo}> Watch Demo</Button>
                            <span style = {{margin: '0'}}></span>
                            <Button outline color="info" href={project.sourceCode}>Source Code</Button>
                            
                        </div>
                        <div>
                            <h6 style={{marginLeft: "30px", marginTop: "30px", color: "white"}} >Description:</h6>
                            <ul style={{marginLeft: "30px", color: "white"}}>
                                {project.description.map( projectContent => {
                                    return(
                                        // (project.projectTitle === 'Movie Rental Membership System') ?
                                        // (<li key={projectContent}>{projectContent}</li>) :
                                        // (project.projectTitle === 'Escape Game') ?
                                        // (<li key={projectContent}>{projectContent}</li>) :
                                        // (project.projectTitle === 'Travelling Website (Co-Creator)') ?
                                        // (<li key={projectContent}>{projectContent}</li>) :
                                        // (project.projectTitle === 'Portfolio Website') ?
                                        // (<li key={projectContent}>{projectContent}</li>) :
                                        // (project.projectTitle === 'Banking Application') ?
                                        // (<li key={projectContent}>{projectContent}</li>) :
                                        // (<li>Undefine</li>)
                                        //(project.projectTitle === 'Movie Rental Membership System') ?
                                        (<li key={projectContent}>{projectContent}</li>)
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </Col>
            )
        })
    }

    render() {
        console.log(this.props.projects)
        return (
            <div id= "Project">
                <Container>
                    <Row>
                        {this.renderProjectList()}
                    </Row>
                </Container>
                
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { projects: state.projects }
}

export default connect(mapStateToProps) (Project);