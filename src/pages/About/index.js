// Import necessary modules and styles
import React from "react";
import "./about.css";
import myImage from "../../assets/images/eleazarf.png"; // Import the image

// Define the 'About' component
function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p>
            I'm an Electronics and Communications Engineer with 15+ years of expertise in IT security solutions. I've excelled in consulting, product development, and teaching information security. Additionally, I'm exploring web development, learning HTML, CSS, JavaScript, jQuery, Bootstrap, and more. My passion lies in technology-driven solutions and fostering innovation.
          </p>
        </div>
        <img src={myImage} className="my-image" alt="Eleazar Fuentes" /> {/* Display the image */}
      </section>
    </>
  );
}

// Export the 'About' component as the default export
export default About;
