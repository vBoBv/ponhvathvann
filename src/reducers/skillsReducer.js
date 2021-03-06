import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

const pythonIcon = <FontAwesomeIcon icon={['fab', 'python']} />;
const javaIcon = <FontAwesomeIcon icon={['fab', 'java']} />;
const htmlIcon = <FontAwesomeIcon icon={['fab', 'html5']} />;
const cssIcon = <FontAwesomeIcon icon={['fab', 'css3']} />;
const javascriptIcon = <FontAwesomeIcon icon={['fab', 'js']} />;
const bootstrapIcon = <FontAwesomeIcon icon={['fab', 'bootstrap']} />;
const reactIcon = <FontAwesomeIcon icon={['fab', 'react']} />;

const skillsReducer = () => {
	return [
		{
			category: 'Programming',
			skillList: ['C', 'C#', 'Java', 'Python', 'TypeScript'],
			icon: [javaIcon, pythonIcon]
		},
		{
			category: 'Framework',
			skillList: ['React', 'Redux', 'Django', '.NET Core', 'ASP.NET', 'Apache Kafka', 'Sass', 'React Native']
		},
		{
			category: 'Front-End & Back-End',
			skillList: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Node', 'Express', 'MongoDB', 'MySQL/PostgreSQL'],
			icon: [htmlIcon, cssIcon, javascriptIcon, bootstrapIcon, reactIcon]
		},
		// { category: 'OS Management', skillList: ['Debian', 'Raspbian', 'Hardware Technology', 'Basic Network-Configuration'] },
		{
			category: 'Additional Skills',
			skillList: [
				'Azure Cloud Services',
				'Azure DevOps',
				'AWS',
				'Docker',
				'Kubernetes',
				'GitHub',
				'Git / Git Flow',
				'Wireframing / UML',
				'SDLC',
				'Debian / Raspbian'
			]
		}
	];
};

export default skillsReducer;
