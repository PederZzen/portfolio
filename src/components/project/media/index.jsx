import React from "react";
import { Wrapper } from "./style";

const Media = ({ media }) => {
  return (
    <Wrapper>
      <img src={media} alt="Image of project" />
    </Wrapper>
  );
};

export default Media;
