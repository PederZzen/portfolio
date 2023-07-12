import React from "react";
import Media from "./media";
import Details from "./details";
import { Wrapper } from "./style";

const Project = ({ project }) => {
  return (
    <Wrapper>
      <Media media={project.media} />
      <Details project={project} />
    </Wrapper>
  );
};

export default Project;
