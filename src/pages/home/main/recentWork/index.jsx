import React from "react";
import { projects } from "../../../../data";
import Project from "../../../../components/project";
import { Wrapper } from "./style";

const RecentWork = () => {
  return (
    <Wrapper className="maxWidth">
      <h2>Recent work</h2>
      {projects.map((project, idx) => {
        if (project.recent) {
          return <Project idx={idx} project={project} />;
        }
        return null;
      })}
    </Wrapper>
  );
};

export default RecentWork;
