import "./projects.scss";
import unrealcuts from "../../images/unrealcuts.png";
import lafih from "../../images/lafih.png";
import streamerloot from "../../images/streamerloot-image.png";
import academates from "../../images/academates.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>Projects</h1>
        <h2>Here are some of my projects</h2>
      </div>
      <div className="projects-container">
        <div className="projects-item">
          <a href="https://theacademates.com/">
            <img src={academates} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Academates</h3>
            <p>
              Academates - a platform where high school students can get help in
              various subjects for free. I have been working on this project for
              the past several months and have been consistently improving it
              for a better user experience.
            </p>
            <div className="tech-items">
              <span>HTML</span>
              <span>SCSS</span>
              <span>JAVASCRIPT</span>
              <span>GITHUB</span>
              <span>REACT</span>
              <span>FIGMA</span>
              <span>FIREBASE</span>
            </div>
            <a href="https://theacademates.com/">View Site</a>
            {/* <a href="https://github.com/ArshM-15/academates">Code</a> */}
          </div>
        </div>
        <div className="projects-item">
          <a href="https://streamerloot.netlify.app/">
            <img src={streamerloot} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Streamerloot</h3>
            <p>
              An E-commerce site built with HTML, CSS, and Javascript where
              users can search for the gaming and streaming equipment used by
              popular streamers.
            </p>
            <div className="tech-items">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>GITHUB</span>
            </div>
            <a href="https://streamerloot.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/streamerloot">Code</a>
          </div>
        </div>
        <div className="projects-item">
          <a href="https://lafih.netlify.app/">
            <img src={lafih} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Lafih</h3>
            <p>
              A home organizing site that has a minimalistic design with a soft
              color palette built with React. I implemented Google Firebase to
              develop a secure user authentication and data collection system.
            </p>

            <div className="tech-items">
              <span>HTML</span>
              <span>SCSS</span>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
              <span>GITHUB</span>
              <span>FIREBASE</span>
            </div>
            <a href="https://lafih.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/lafih">Code</a>
          </div>
        </div>
        <div className="projects-item">
          <a href="https://unrealcuts.netlify.app/">
            <img src={unrealcuts} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Unreal Cuts</h3>
            <p>
              An aesthetically pleasing template barbershop website I made using
              React and Scss. The website features a sleek and modern design,
              with clean typography and high-quality images.
            </p>
            <div className="tech-items">
              <span>HTML</span>
              <span>SCSS</span>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
              <span>GITHUB</span>
            </div>
            <a href="https://unrealcuts.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/Barbershop-Website">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
