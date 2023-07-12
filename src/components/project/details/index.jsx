import React from "react";
import { Wrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Details = ({ project }) => {
  return (
    <Wrapper>
      <span>{project.type}</span>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div>
        <a href={project.url} target="_blank" rel="noreferrer">
          <button className="button">See project</button>
        </a>
        {project.github ? (
          <a id="gitHub" href={project.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Details;
