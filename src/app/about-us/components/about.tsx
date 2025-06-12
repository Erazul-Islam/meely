import React from 'react';
import AboutHero from './about-hero';
import MissionVission from './mission-vision';
import Story from './story';
import Review from '@/components/home/review';
import SuperApp from '@/components/home/super-app';

const About = () => {
    return (
        <div>
            <AboutHero/>
            <MissionVission/>
            <Story/>
            <Review/>
            <SuperApp/>
        </div>
    );
};

export default About;