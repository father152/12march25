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
          <h4>First</h4>
          <LoremIpsum />
          <h4>Second</h4>
          <LoremIpsum />
          <LoremIpsum />
          <h4>Third</h4>
          <LoremIpsum />
          <LoremIpsum />
          
        </p>
      </div>
    </div>
  );
}
export { Projects };
