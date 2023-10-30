// Import necessary modules and styles
import React from "react";
import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Define the 'Social' component
function Social() {
  return (
    // Render a section with contact links/icons
    <section className="contact-links">
      {/* Link to GitHub profile with GitHub icon */}
      <a
        href="https://github.com/eleazarf"
        target="__blank" // Open link in a new tab
        className="github-icon"
      >
        <FontAwesomeIcon icon={faGithub} /> {/* Render the GitHub icon */}
      </a>
      {/* Link to LinkedIn profile with LinkedIn icon */}
      <a
        href="https://www.linkedin.com/in/eleazarf"
        target="__blank"
        className="linkedin-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} /> {/* Render the LinkedIn icon */}
      </a>
      {/* Link to email with envelope icon */}
      <a
        href="mailto:eleazar.fuentes@gmail.com"
        target="__blank"
        className="envelope-icon"
      >
        <FontAwesomeIcon icon={faEnvelope} /> {/* Render the envelope icon */}
      </a>
    </section>
  );
}

// Export the 'Social' component as the default export
export default Social;
