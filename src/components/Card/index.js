// Import necessary modules and styles
import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Define the 'Card' component
function Card(props) {
  // Determine if the project is deployed
  const isDeployed = props.deployment;

  return (
    // Render a card representing a project
    <article className="card">
      <section className="card-header">
        <h3 className="card-title">{props.name}</h3> {/* Display the project name */}
      </section>
      <section className="card-body">
        <p>{props.description}</p> {/* Display the project description */}
        <section className="card-links">
          <a href={props.github} className="card-github">
            <FontAwesomeIcon icon={faGithub} /> {/* Render a GitHub icon and link */}
          </a>
          {isDeployed ? (
            <a href={props.deployment} className="card-deployment">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {/* Render a deployment icon and link if deployed */}
            </a>
          ) : (
            ""
          )}
        </section>
      </section>
      <section className="technologies">
        <p>{props.tech}</p> {/* Display the project's technologies */}
      </section>
    </article>
  );
}

// Export the 'Card' component as the default export
export default Card;
