import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <h3>Title</h3>
        <p>
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </p>
      </div>
    </div>
  );
}
export { Projects };
