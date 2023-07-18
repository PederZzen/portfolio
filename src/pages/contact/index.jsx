import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Wrapper } from "./style";

const Contact = () => {
  return (
    <Wrapper className="maxWidth headerStyling">
      <h1>Contact</h1>
      <span>Contact</span>
      <div>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+4741200854">+47 412 00 854</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:hello@espenpedersen.no">hello@espenpedersen.no</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedin} />
        <a
          href="https://www.linkedin.com/in/espen-holm-pedersen-0a36a315a/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/PederZzen" target="_blank">
          GitHub
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;
