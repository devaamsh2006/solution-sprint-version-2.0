import React from 'react'
import LetterGlitch from './HyperSpeed';
import Hero from './Hero';
import { Element } from 'react-scroll';
import About from './About';
import Domain from './Domain';
import FAQ from './FAQ';
import StatsOfLastEvent from './StatsOfLastEvent';
import EventTimeLine from './EventTimeLine';
import Rewards from './Rewards';
import WhyParticipate from './WhyParticipate';

function Home() {
    return (
        <div>
            <Element name="home">
            <div>
                <h1 className="text-center text-white">
                <div className='relative h-screen w-screen'>
                {/* <LetterGlitch
                 glitchSpeed={70}
                centerVignette={false}
                outerVignette={true}
                smooth={true}
                />  */}
                <Hero />
            </div>
            </h1>
            </div>
            </Element>
            <Element name="about" id="about">
                <About />
            </Element>

            <Element name="domain" id="domain">
                <Domain />
            </Element>

            <Element name="faq" id="faq">
                <FAQ />
            </Element>

            <Element name="stats" id="stats">
                <StatsOfLastEvent />
            </Element>


            <Element name="rewards" id="rewards">
                <WhyParticipate />
                {/* <Rewards /> */}
            </Element>

            <Element name="timeline" id="timeline">
                <EventTimeLine />
            </Element>

            
        </div>
    );
}

export default Home;
