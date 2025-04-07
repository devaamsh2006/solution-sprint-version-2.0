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
                <h1 className="text-center">Home</h1>
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
