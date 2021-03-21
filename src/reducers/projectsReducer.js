import cmsGif from '../images/cms.gif';
import travelBuddyGif from '../images/travelBuddy.gif';
import consoleGameGif from '../images/consoleGame.gif';
import websiteGif from '../images/website.gif';
import bankApp from '../images/bankApp.gif';
import videoApp from '../images/videoApp.gif';
import fastHorse from '../images/fastHorse.gif';
import ngawariEnrol from '../images/ngawariEnrol.gif';
import cosmosRing from '../images/cosmosRing.gif';
import above from '../images/above.gif';

const projectsReducer = () => {
	return [
		{
			projectTitle: 'Cosmos Ring',
			description: [
				'A RESTful-Based web app developed with React / Redux / TypeScript / Django Rest Framework',
				'Utilized AWS S3 Bucket to deploy Front-End app',
				'Dockerized the Back-End app with Docker on AWS EC2',
				'Deployed a PostgreSQL database on cloud with AWS RDS'
			],
			gif: cosmosRing,
			demo: 'http://www.cosmosring.me/',
			sourceCode: 'https://github.com/vBoBv/cosmosring/tree/assignment-2/Assignment/iscg7420-Assignment1'
		},
		{
			projectTitle: 'Above',
			description: [
				'A RESTful-Based web app developed with React / TypeScript / .NET Core',
				'Implemented CQRS - MediatR Pattern for the Back-End architecture',
				'Utilized Azure Cloud Services for Web App and MySQL Database',
				'Deployed Web App to Azure DevOps for CI/CD'
			],
			gif: above,
			demo: 'https://aboveyou.azurewebsites.net/',
			sourceCode: 'https://github.com/vBoBv/MSA-Phase-2-Fullstack'
		},
		{
			projectTitle: 'Fast Horse Takeaway',
			description: [
				'A REST-Based app developed with MongoDB / Express / React / Redux / Node',
				'Custom SCSS styling using Grid System written with BEM-IT naming conventions',
				'Implemented OAuth authentication with CRUD operations accessibility',
				'Coordinated with Fast Horse Takeaway to present the business online'
			],
			gif: fastHorse,
			demo: 'https://www.fasthorsetakeaway.com/',
			sourceCode: 'https://github.com/vBoBv/restaurant'
		},
		{
			projectTitle: 'Course Scheduler',
			description: [
				'Implemented a brand new UI with React / Redux / Sass',
				'Re-innovated Unitec’s re-enrollment system front-end application',
				'Reverse engineered the manual course selection system with a one click process'
			],
			gif: ngawariEnrol,
			demo: 'https://www.ngawarienrol.com/',
			sourceCode: 'https://github.com/vBoBv/timetable-planner'
		},
		{
			projectTitle: 'Movie Rental Membership System',
			description: [
				'GUI software developed with Java programming language',
				'A software to register memberships and process transactions',
				'Utilized Object-Oriented Programming',
				'Encapsulation, File Handlings and Exception Handlings',
				'Implement ArrayList and String Tokenizer to read and write data to csv files'
			],
			gif: cmsGif,
			demo: 'https://youtu.be/05hQS6Ez9WU',
			sourceCode: 'https://github.com/vBoBv/Movie-Rental-Membership-System'
		},
		{
			projectTitle: 'Banking Application',
			description: [
				'Built with Java programming language',
				'Desktop version of an Online Banking',
				'User can deposit, withdraw and transfer money from different accounts',
				'All kind of transactions will be saved into csv files',
				'Utilized Java Date API'
			],
			gif: bankApp,
			demo: 'https://youtu.be/tvSkp5C2K3U',
			sourceCode: 'https://github.com/vBoBv/Banking-Application'
		},
		{
			projectTitle: 'Portfolio Website',
			description: [
				'Built with JavaScript (ES6), React / Redux',
				'Responsive website compatible with Desktop/Tablet/Mobile version',
				'Utilized Reducers for state management and to store data',
				'Implemented Reactstrap Library for responsiveness'
			],
			gif: websiteGif,
			demo: 'https://vbobv.github.io/ponhvathvann/',
			sourceCode: 'https://github.com/vBoBv/ponhvathvann'
		},
		{
			projectTitle: 'Online Video Media Player',
			description: [
				'Built with JavaScript (ES6), React / Axios',
				'A replica of Youtube',
				'Utilized Axios to request data from Youtube API',
				'Implemented Semantic UI Javascript Library'
			],
			gif: videoApp,
			demo: 'https://youtu.be/CyqhUBlWoWw',
			sourceCode: 'https://github.com/vBoBv/Online-Video-Media-Player'
		},
		{
			projectTitle: 'Escape Game',
			description: [
				'Console game build with Python programming language',
				'Taking input from the user and using functions to move player from one position to another',
				'A battle-scene using Array to display the health bar between the boss and the player',
				'Using loops to print the fight scene and to process the battle-scene'
			],
			gif: consoleGameGif,
			demo: 'https://youtu.be/kIYd6mz61B4',
			sourceCode: 'https://github.com/vBoBv/Escape-Game'
		},

		{
			projectTitle: 'Travelling Website (Co-Creator)',
			description: [
				'Built with HTML/CSS/JavaScript and Bootstrap',
				'Responsible for the design and the architecture of the coding',
				'Scalable website compatible with Desktop and Tablet screen size'
			],
			gif: travelBuddyGif,
			demo: 'http://dochyper.unitec.ac.nz/htcs/travelbuddy/Website/index.html',
			sourceCode: 'https://github.com/Unitec-HTCS4602/The-A-Team'
		}
	];
};

export default projectsReducer;
