import "./projects.scss";
import streamerloot from "../../images/streamerloot-image.png";
import unrealcuts from "../../images/unrealcuts.png";
import lafih from "../../images/lafih.png";
import countryrolodex from "../../images/country-rolodex.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>Projects</h1>
        <h2>Here are some of my projects</h2>
      </div>
      <div className="projects-box">
        <div className="projects-container">
          <div className="projects-item">
            <img src={unrealcuts} alt="image of the website" />

            <h3>Unreal Cuts</h3>
            <p>
              An aesthetically pleasing and responsive template barbershop
              website made using React and Sass. The website features a sleek
              and modern design, with clean typography and high-quality images.
            </p>
            <a href="https://unrealcuts.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/Barbershop-Website">Code</a>
          </div>

          <div className="projects-item">
            <img src={lafih} alt="image of the website" />
            <h3>Lafih</h3>
            <p>
              A home organizing site that has a minimalistic design with a soft
              color palette built with React. Google Firebase was used to
              develop a secure user authentication and data collection system.
            </p>
            <a href="https://lafih.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/lafih">Code</a>
          </div>

          <div className="projects-item">
            <img src={streamerloot} alt="image of the website" />
            <h3>Streamerloot</h3>
            <p>
              A responsive E-commerce site built only with HTML, CSS, and
              Javascript that offers all sorts of gaming and streaming
              equipment. The website's design features a visually engaging
              layout and a pretty gradient.
            </p>
            <a href="https://streamerloot.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/streamerloot">Code</a>
          </div>

          <div className="projects-item">
            <img src={countryrolodex} alt="image of the website" />
            <h3>Country Rolodex</h3>
            <p>
              The website's design features a simple and intuitive layout, with
              a search bar that allows users to easily search and filter through
              the database of countries. The site was built with React and the
              styling was achieved with Sass.
            </p>
            <a href="https://country-rolodex.netlify.app/">View Site</a>
            <a href="https://github.com/ArshM-15/Country-Rolodex">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
