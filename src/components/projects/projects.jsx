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
          <a href="https://unrealcuts.netlify.app/">
            <img src={unrealcuts} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Unreal Cuts</h3>
            <p>
              An aesthetically pleasing and responsive template barbershop
              website made using React and Scss. The website features a sleek
              and modern design, with clean typography and high-quality images.
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
        <div className="projects-item">
          <a href="https://academates.tech/">
            <img src={academates} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Academates</h3>
            <p>
              Academates is a website me and my teammates created at a hackathon
              that connects ambitious high school students for academic support
              and motivation.
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
            <a href="https://academates.tech/">View Site</a>
            <a href="https://github.com/ArshM-15/academates">Code</a>
          </div>
        </div>

        <div className="projects-item">
          <a href="https://streamerloot.netlify.app/">
            <img src={streamerloot} alt="image of the website" />
          </a>
          <div className="item-info">
            <h3>Streamerloot</h3>
            <p>
              A responsive E-commerce site built only with HTML, CSS, and
              Javascript that offers all sorts of gaming and streaming
              equipment. The website's design features a visually engaging
              layout and a pretty gradient.
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
              color palette built with React. Google Firebase was used to
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
      </div>
    </div>
  );
};

export default Projects;
