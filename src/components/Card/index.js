import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const isDeployed = props.deployment;
  return (
    <article className="card">
      <section className="card-header">
        <h3 className="card-title">{props.name}</h3>
      </section>
      <section className="card-body">
        <p>{props.description}</p>
        <section className="card-links">
          <a href={props.github} className="card-github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {isDeployed ? (
            <a href={props.deployment} className="card-deployment">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : (
            ""
          )}
        </section>
      </section>
      <section className="technologies">
        <p>{props.tech}</p>
      </section>
    </article>
  );
}

export default Card;