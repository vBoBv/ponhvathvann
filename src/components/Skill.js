import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import '../css/Skill.css'

class Skill extends React.Component {

    renderSkillList(){
        return this.props.skills.map (skill => {
            return (
                <Col md={3} key={skill.category} >
                    <div className="skillBoxStyle">
                        <h5 className="categoryTitle">{skill.category}</h5>
                        
                            {skill.skillList.map ( eachSkill => {
                                return(
                                (skill.category === 'Programming') ? 
                                (<div key={eachSkill} className="skillStyle">  {eachSkill} </div>):
                                (skill.category === 'Front-End & Frameworks') ? 
                                (<div key={eachSkill} className="skillStyle"> {eachSkill} </div>):
                                (skill.category === 'OS Management') ?
                                (<div key={eachSkill} className="skillStyle"> {eachSkill} </div>):
                                (skill.category === 'Additional Skills') ?
                                <div key={eachSkill} className="skillStyle"> {eachSkill} </div> :
                                <div> Undefine </div>
                            )})}
                        
                    </div>
                </Col>
            );
        });
    };

    render() {
        return (
            <Container>
                <Row noGutters>
                    {this.renderSkillList()}
                </Row>
            </Container>
        );
    };
};

const mapStateToProps = (state) => {
    return { skills: state.skills}
};

export default connect(mapStateToProps) (Skill);