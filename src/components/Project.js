import React from "react";
import chloro from "../assets/chloro.png";
import Pokemon from "../assets/pokemon.png";
import Emocare from "../assets/Emocare.png";
import CreativFi from "../assets/creative.png";
import Vocal from "../assets/Vocal.png";

function Project() {
  const projects = [
    {
      title: "CreativFi",
      description:
        "a web app designed to connect content creators with freelancing opportunities tailored to their unique skills.",
      techStack : "created using reactjs",
      image: CreativFi, // Corrected
      github: "https://github.com/Aradhya-005/CreativFi",
      preview: "https://creativfi.vercel.app/",
    },
    {
      title: "VocalRemover",
      description:
        "A UI of a platform which extract the vocals from a file",
        techStack : "created using Nextjs, Mantine UI",
      image: Vocal, // Corrected
      github: "https://github.com/Aradhya-005/VocalRemover",
      preview: "https://vocal-remover-gilt.vercel.app/",
    },
    {
      title: "Emocare",
      description:
        "A web app that suggests techniques to reduce stress and improve well-being.",
        techStack : "created using Reactjs",
      image: Emocare, // Corrected
      github: "https://github.com/Aradhya-005/Emocare",
      preview: "https://emocare-alpha.vercel.app/",
    },
    {
      title: "Poke",
      description:
        "A  web app that includes all the pokemon characters with search functionality ( you can search your favorite character). ",
        techStack : "created using Nextjs",
      image: Pokemon, // Corrected
      github: "https://github.com/Aradhya-005/poke_mon",
      preview: "https://poke-mon-olive.vercel.app/",
    },
    {
      title: "Cholro",
      description:
        "A platform related to skincare and beauty ",
      techStack : "created using Nextjs, Tailwind CSS",
      image: chloro, // Corrected
      github: "https://github.com/Aradhya-005/chloro",
      preview: "https://chloro-navy.vercel.app/",
    },
  ];

  return (
    <>
      <div className="project-array">
        {projects.map((project, index) => (
          <div className="project-container" key={index}>
            <div className="project-img">
              <img src={project.image} alt={`${project.title} thumbnail`} />
            </div>
            <div className="project-desc">
              <p>{project.description}</p>
            </div>
            <div>  <p>{project.techStack}</p></div>
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
    </>
  );
}

export default Project;
