import React from 'react';
import NavBar from './NavBar';
import LandingSection from './LandingSection';
import SectionHeader from './SectionHeader';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import '../css/App.css';

const App = () => {
    return (
        <div className="bodyContent">
            <NavBar />
            <LandingSection />
            <SectionHeader section="# Skills" />
            <Skill />
            <SectionHeader section="# Projects" />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;