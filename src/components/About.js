import React from "react";
import User from "../assets/user.jpg";
// import { DotPattern } from "./DotPattern";
import GridPatternLinearGradient from "./GridPatternLinearGradient";

function About() {
  return (
    <>
      <section className="hero-section">
        {/* <DotPattern width={30} height={30} cx={10} cy={20} cr={1} color="#afafaf" />  */}
        

        <div className="about">
          <div className="about-img">
            <img src={User} alt="User " />
          </div>
          <div className="about-text">
            <h1 className="name">Aradhya Yadav</h1>

            <p className="bold-text">
              Aradhya is a Frontend Developer focused on building beautiful,
              functional websites — currently pursuing Bachelor's in Computer
              Application.
            </p>

            <p> she likes to learn something new.</p>
            <p className="hobbies">
  When she has some downtime, you might find her watching K-dramas, exploring photography, or listening to music.
</p>

            <p className="location">— Based in Lucknow, Uttar Pradesh</p>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <div className="education">
          <h2>EDUCATION</h2>
          <div className="edu-entry">
            <h3>University of Lucknow</h3>
            <p>Bachelor's in Computer Application</p>
            <span>Aug 2022 - Present</span>
          </div>
          <div className="edu-entry">
            <h3>Jawahar Navodaya Vidyalaya Pipersand, Lucknow</h3>
            <p>Intermediate</p>
            <p>High School</p>
            <span>July 2015 - June 2022</span>
          </div>
        </div>
        <div className="experience">
          <h2>EXPERIENCE</h2>
          <div className="exp-entry">
            <h3> GSSOC'24 Extended</h3>
            <p>Open-Source Contributor</p>

            <span>Oct 2024 - Nov 2024 </span>
          </div>
          <div className="exp-entry">
            <h3>Software Engineering Fellow At HeadStarter</h3>
            <p>
              Selected from over 41,000 applicants for this prestigious
              fellowship.
            </p>
            <span>July 2024 - Aug 2024</span>
          </div>
        </div>

        <div className="skills" id="skills">
          <h2>SKILLS</h2>
          <ul>
            <li>React.js</li>
            <li>CSS3 + HTML5</li>
            <li>Tailwind CSS</li>
            <li>Javascript + Python</li>
            <li>Figma</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
