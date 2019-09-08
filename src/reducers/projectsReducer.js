import cmsGif from "../images/cms.gif";
import travelBuddyGif from "../images/travelBuddy.gif";
import consoleGameGif from "../images/consoleGame.gif";
import websiteGif from "../images/website.gif";
import bankApp from "../images/bankApp.gif";
import videoApp from '../images/videoApp.gif';

const projectsReducer = () => {

    return [
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
                'A replica of mobile internet banking but desktop version',
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
            demo: 'vbobv.github.io/ponhvathvann',
            sourceCode: '/'
        },
        {
            projectTitle: 'Online Video Media Player',
            description: [
                'Built with JavaScript (ES6), React / Axios',
                'A prototype version of Youtube',
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
    ]
}

export default projectsReducer;