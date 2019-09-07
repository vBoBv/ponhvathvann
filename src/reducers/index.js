import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import skillsReducer from './skillsReducer';

export default combineReducers({
    projects: projectsReducer,
    skills: skillsReducer
})
