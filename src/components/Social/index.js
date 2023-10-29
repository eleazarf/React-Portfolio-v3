import React from "react";
import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <section className="contact-links">
      <a
        href="https://github.com/eleazarf"
        target="__blank"
        className="github-icon"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/eleazarf"
        target="__blank"
        className="linkedin-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="mailto:eleazar.fuentes@gmail.com"
        target="__blank"
        className="envelope-icon"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </section>
  );
}

export default Social;