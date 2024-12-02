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
        "a  platform designed to connect content creators with freelancing opportunities tailored to their unique skills.",
      image: CreativFi, // Corrected
      github: "https://github.com/Aradhya-005/CreativFi",
      preview: "https://creativfi.vercel.app/",
    },
    {
      title: "VocalRemover",
      description:
        "A platform to find eco-friendly products and track carbon footprints.",
      image: Vocal, // Corrected
      github: "https://github.com/Aradhya-005/VocalRemover",
      preview: "https://vocal-remover-gilt.vercel.app/",
    },
    {
      title: "Emocare",
      description:
        "An app that suggests techniques to reduce stress and improve well-being.",
      image: Emocare, // Corrected
      github: "https://github.com/Aradhya-005/Emocare",
      preview: "https://emocare-alpha.vercel.app/",
    },
    {
      title: "Poke",
      description:
        "An app that suggests techniques to reduce stress and improve well-being.",
      image: Pokemon, // Corrected
      github: "https://github.com/Aradhya-005/poke_mon",
      preview: "https://poke-mon-olive.vercel.app/",
    },
    {
      title: "Cholro",
      description:
        "An app that suggests techniques to reduce stress and improve well-being.",
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
