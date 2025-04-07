import React from 'react'
import LetterGlitch from './HyperSpeed';
import Hero from './Hero';
import { Element } from 'react-scroll';
import About from './About';
import Domain from './Domain';
import FAQ from './FAQ';
import StatsOfLastEvent from './StatsOfLastEvent';
import EventTimeLine from './EventTimeLine';

function Home() {
    return (
        <div>
            <div>
                <h1 className="text-center">
                <div className='relative h-1/2 w-screen bg-black'>
                <LetterGlitch
                 glitchSpeed={70}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
                /> 
            <Hero />
        </div>
                </h1>
            </div>
            <Element name="about">
                <About />
            </Element>

            <Element name="domain">
                <Domain />
            </Element>

            <Element name="faq">
                <FAQ />
            </Element>

            <Element name="stats">
                <StatsOfLastEvent />
            </Element>

            <Element name="timeline">
                <EventTimeLine />
            </Element>
        </div>
    );
}

export default Home;
