import React from "react";
import User from "../assets/user.svg";
import Navbar from "./Navbar";
import skills from "../assets/skills.svg";
import education from "../assets/education.svg";
import experience from "../assets/experience.svg";

function About() {
  return (
    <>
      <section className="hero-section">
        <Navbar />
        <div className="about">
          <div className="about-img">
            <img src={User} alt="User" />
          </div>
          <div className="about-text">
            <h1 className="name">
              Hi, I'm Aradhya 👋
            </h1>
            <p className="bold-text">
              a Frontend Developer passionate about crafting beautiful and
              functional websites. I recently completed my Bachelor's in
              Computer Applications and I’m always eager to learn the latest in
              tech and design.
            </p>
            <p>
              I love exploring new knowledge and expanding my skillset every
              day.
            </p>
            {/* <p className="hobbies">
              When I’m not coding, you’ll find me watching K-dramas, exploring
              photography.
            </p> */}
            <p className="location">— Based in Lucknow, Uttar Pradesh</p>
          </div>
        </div>
      </section>
      <section className="resume-section">
        <div className="cards">
          <div className="card">
            <h1 className="resume-heading">About Me</h1>
          </div>
          <div className="experience card">
            <img src={experience} alt="experience" />
            <h2>Experience</h2>
            <div className="exp-entry">
              <h3>Frontend Developer Intern at DcodeBlock</h3>
              <p>
                - Created pixel perfect UI components using React.js and
                Tailwind CSS.
              </p>
              <p>- implemented onboarding tour for the first time users. </p>
              <span>March 2025 - May 2025</span>
            </div>
            <div className="exp-entry">
              <h3>Open-Source Contributor at GSSOC'24 Extended</h3>
              <p>
                - Contributed to the open-source projects by fixing issues using
                HTML, CSS, and JavaScript.
              </p>
              <p>- Improved UI/UX and optimized layout across devices.</p>
              <span>Oct 2024 - Nov 2024</span>
            </div>
          </div>
          <div className="skills card">
            <img src={skills} alt="skills" />
            <h2>Skills</h2>
            <ul>
              <li>React.js</li>
              <li>CSS3 + HTML5</li>
              <li>Tailwind CSS</li>
              <li>Javascript </li>
              <li>Git & GitHub</li>
              <li>Python</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="education card">
            <img src={education} alt="education" />
            <h2>Education</h2>
            <div className="edu-entry">
              <h3>University of Lucknow</h3>
              <p>- Bachelor's in Computer Application</p>
              <span>Aug 2022 - June 2025</span>
            </div>
            <div className="edu-entry">
              <h3>Jawahar Navodaya Vidyalaya Pipersand, Lucknow</h3>
              <p>- Intermediate</p>
              <p>- High School</p>
              <span>July 2015 - June 2022</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
