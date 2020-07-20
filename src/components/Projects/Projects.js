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
    githubLink: 'https://github.com/SpencerKK/Ready-to-Launch',
    siteLink: 'https://www.readytolaunchpodcasts.com/'
  },
  {
    title: "Take Note",
    src: noteScreenshot,
    desc:
      "Evernote clone built with the MERN stack. Users can login, create notes and organize them into notebooks",
    githubLink: 'https://github.com/SpencerKK/take-note',
    siteLink: 'https://glacial-badlands-60032.herokuapp.com/'
  },
  {
    title: "Spencer Movies",
    src: moviesScreenhot,
    desc:
      "Simple movie browsing website that makes requests to MovieDB. Users can search for movies & shows, and view similar titles",
    githubLink: 'https://github.com/SpencerKK/spencermovies',
    siteLink: 'https://spencerkk.github.io/spencermovies/#/'
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className='projects-title'>Projects</h1>
      <ul className="projects-ul">
        {projectsArr.map((project) => (
          <li key={project.title}>
            <div className="project-card">
              <img src={project.src} alt={project.title + ' Screenshot'} />
              <div className="card-detail">
                <h2>{project.title}</h2>
                <p className='project-desc'>{project.desc}</p>
                <button><a href={project.githubLink}>Code</a></button>
                <button><a href={project.siteLink}>Demo</a></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
