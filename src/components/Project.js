import React from "react";
import chloro from "../assets/chloro.png";
import Pokemon from "../assets/pokemon.png";
import Emocare from "../assets/Emocare.png";
import CreativFi from "../assets/creative.png";
import Navbar from "./Navbar";
import Plane from '../assets/Plane.svg';

function Project() {
  const projects = [
    {
      className: "creativfi",
      title: "CreativFi",
      description:
        "a web app designed to connect content creators with freelancing opportunities tailored to their unique skills.",
      techStack: "Reactjs",
      image: CreativFi,
      github: "https://github.com/Aradhya-005/CreativFi",
      preview: "https://creativfi.vercel.app/",
    },
   
    {
      className: "emocare",
      title: "Emocare",
      description:
        "A web app that suggests techniques to reduce stress and improve well-being.",
      techStack: "Reactjs",
      image: Emocare,
      github: "https://github.com/Aradhya-005/Emocare",
      preview: "https://emocare-alpha.vercel.app/",
    },
    {
      className: "poke",
      title: "PokeMon",
      description:
        "A  web app that includes all the pokemon characters with search functionality ( you can search your favorite character). ",
      techStack: "Nextjs",
      image: Pokemon,
      github: "https://github.com/Aradhya-005/poke_mon",
      preview: "https://poke-mon-olive.vercel.app/",
    },
    {
      className: "chloro",
      title: "Chloro",
      description: "A platform related to skincare and beauty ",
      techStack: "Nextjs, Tailwind CSS",
      image: chloro,
      github: "https://github.com/Aradhya-005/chloro",
      preview: "https://chloro-navy.vercel.app/",
    },
  ];

  return (
    <>
      <div className="project-array ">
        <Navbar />
        <div className=" project-cards">
        <div className="project-container">
            <div>
            <div className=" project-heading-container">
            <h1 className="project-heading">Projects <img src={Plane} alt="plane"/></h1>
              
            </div>
          </div>
          {projects.map((project, index) => (
            <div
              className={` ${project.className} card project-card`}
              key={index}
            >
              <div className="project-img">
                <img src={project.image} alt={`${project.title} thumbnail`} />
              </div>
              <h2 className="project-title">{project.title}</h2>
              <div className="project-desc">
                <p>{project.description}</p>
                <p className="project-tech">
                  {" "}
                  created using<span> {project.techStack}</span>
                </p>
              </div>
              <div className="navigations">
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

        </div>
        </div>
      </div>
    </>
  );
}

export default Project;
