// Import necessary modules and styles
import React, { useState } from "react";
import "./projects.css";
import Card from "../../components/Card/index"; // Import the 'Card' component
import projectsData from "../../data/portfolioData.json"; // Import project data

// Define the 'Projects' component
function Projects() {
  const [cardList] = useState(projectsData); // Use state to store project data

  return (
    <section className="my-work">
      <h2>Projects</h2> {/* Display a heading for projects */}
      <div className="my-work-cards">
        {cardList.map((card) => {
          return (
            <Card
              name={card.name} // Pass project name as a prop
              key={card.name} // Set a unique key for each project card
              description={card.description} // Pass project description as a prop
              github={card.github} // Pass GitHub link as a prop
              deployment={card.deployment} // Pass deployment link as a prop
              tech={card.tech} // Pass project technologies as a prop
            />
          );
        })}
      </div>
    </section>
  );
}

// Export the 'Projects' component as the default export
export default Projects;
