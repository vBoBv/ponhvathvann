import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
    fab
)

const pythonIcon = <FontAwesomeIcon icon={["fab","python"]} />
const javaIcon = <FontAwesomeIcon icon={["fab","java"]} />
const htmlIcon = <FontAwesomeIcon icon={["fab","html5"]} />
const cssIcon = <FontAwesomeIcon icon={["fab","css3"]} />
const javascriptIcon = <FontAwesomeIcon icon={["fab","js"]} />
const bootstrapIcon = <FontAwesomeIcon icon={["fab","bootstrap"]} />
const reactIcon = <FontAwesomeIcon icon={["fab","react"]} />

const skillsReducer = () => {
    return [
        { category: 'Programming', skillList: ['Java', 'Python'], icon: [ javaIcon, pythonIcon ] },
        { category: 'Front-End & Frameworks', skillList: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap 4', 'React / Redux'], icon: [ htmlIcon, cssIcon, javascriptIcon, bootstrapIcon, reactIcon] },
        { category: 'OS Management', skillList: ['Debian', 'Raspbian', 'Hardware Technology', 'Basic Network-Configuration'] },
        { category: 'Additional Skills', skillList: ['GitHub', 'Git Flow', 'Wireframing / UML', 'Microsoft SQL Server', 'SDLC'] }
    ]
}

export default skillsReducer;