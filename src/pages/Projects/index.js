import React, { useState } from "react";
import "./projects.css";
import Card from "../../components/Card/index";
import projectsData from "../../data/portfolioData.json";

function Projects() {
  const [cardList] = useState(projectsData);
  return (
    <section className="my-work">
      <h2>projects</h2>
      <div className="my-work-cards">
        {cardList.map((card) => {
          return (
            <Card
              name={card.name}
              key={card.name}
              description={card.description}
              github={card.github}
              deployment={card.deployment}
              tech={card.tech}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;