import React from "react";
import "./Projects.css";

// Screencaps
import launchScreenshot from "../../img/launch-screenshot.png";
import noteScreenshot from "../../img/take-note-screenshot.png";
import moviesScreenhot from "../../img/movies-screenshot.png";

const projectsArr = [
  {
    title: "Ready to Launch",
    src: launchScreenshot,
    desc:
      "Website for Ready to Launch, a business connecting podcasters with interesting and varied clients",
  },
  {
    title: "Take Note",
    src: noteScreenshot,
    desc:
      "Evernote clone built with the MERN stack. Users can login, create notes and organize them into notebooks",
  },
  {
    title: "Spencer Movies",
    src: moviesScreenhot,
    desc:
      "Simple movie browsing website that makes requests to MovieDB. Users can search for movies & shows, and view similar titles",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
        <h1 className='projects-title'>Projects</h1>
      <ul className="projects-ul">
        {projectsArr.map((project) => (
          <li>
            <div className="project-card">
              <img src={project.src} />
              <div className="card-detail">
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
