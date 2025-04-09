import React from 'react';
import './About.css';
import round1 from '/images/image1.jpg';
import round2 from '/images/image2.jpg';
import round3 from '/images/image3.jpg';

const About = () => {
  return (
    <div className="backdrop-blur-md">
      <section className="hero animate-fade-down">
        <h1>About Solution Sprint 2.0</h1>
        <p>
          Solution Sprint 2.0 is a dynamic problem-solving event where students tackle real-world issues through innovative tech-based solutions.
        </p>
      </section>
      <h2 className="section-title animate-fade-up">Event Rounds</h2>
      <section className="rounds">
        

        <div className="card animate-zoom-in">
          <img src={round1} alt="Round 1" />
          <div className="card-info">
            <h3>Sprint 1: PPT Submission</h3>
            <p>Participants prepare a PPT online explaining their solution idea and approach.</p>
          </div>
        </div>

        <div className="card animate-zoom-in delay-200">
          <img src={round2} alt="Round 2" />
          <div className="card-info">
            <h3>Sprint 2: Online Presentation</h3>
            <p>Teams present their ideas over Google Meet to a panel of judges.</p>
          </div>
        </div>

        <div className="card animate-zoom-in delay-400">
          <img src={round3} alt="Round 3" />
          <div className="card-info">
            <h3>Sprint 3: Final Evaluation</h3>
            <p>At VNRVJIET campus, finalists showcase a working prototype using Figma or development tools.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;