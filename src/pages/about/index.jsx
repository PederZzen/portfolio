import React from "react";
import { Wrapper } from "./style";
import headshot from "./Portrett.jpg";

const About = () => {
  return (
    <Wrapper className="maxWidth headerStyling">
      <h1>About</h1>
      <span>About</span>
      <div id="content">
        <div>
          <div>
            I am a front-end developer fron Norway with experience in building
            responsive and user-friendly solutions, with a focus on universal
            design in line with WCAG guidelines.
          </div>
          <div>
            Currently, i am working freelance as a consultant at Exuma, where I
            create, update, and modernize various websites.
          </div>
          <div>My programming weapon-of-chice is React.</div>
        </div>
        <div>
          <img src={headshot} alt="Portrait of Espen" />
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
