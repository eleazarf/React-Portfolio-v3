// Import necessary modules and styles
import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

// Define the 'Home' component
function Home() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p className="greeting">Hi there!</p>
        <h1>
          I'm Eleazar{" "}
        </h1>
        <p className="job">A Full Stack Web Developer Enthusiast</p>
        <a href="mailto:eleazar.fuentes@gmail.com" className="contact-btn">
          <FontAwesomeIcon icon={faAt} /> Contact
        </a>
      </div>
    </section>
  );
}

// Export the 'Home' component as the default export
export default Home;
