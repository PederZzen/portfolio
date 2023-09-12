import React from "react";
import { projects } from "../../data";
import Project from "../../components/project";

const Projects = () => {
  return (
    <div className="maxWidth headerStyling">
      <h1>Prosjekter</h1>
      <span>Prosjekter</span>
      <div id="projects">
        {projects.map((project, idx) => {
          return <Project idx={idx} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
