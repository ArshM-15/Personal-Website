import "./projects.scss";
import streamerloot from "../../images/streamerloot-image.png";
import unrealcuts from "../../images/unrealcuts.png";
import lafih from "../../images/lafih.png";
import countryrolodex from "../../images/country-rolodex.png";

const Projects = () => {
  return (
    <div className="projects">
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, iusto commodi eligendi excepturi illum dolore a
              facilis maiores sit repellat nam aliquam architecto quo, animi
              non. Nostrum sit optio iure!
            </p>
            <a href="https://unrealcuts.netlify.app/">Live</a>
            <a href="https://github.com/ArshM-15/Barbershop-Website">Code</a>
          </div>

          <div className="projects-item">
            <img src={lafih} alt="image of the website" />
            <h3>Lafih</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              incidunt eum inventore itaque velit temporibus corporis quibusdam
              quam voluptatum enim quisquam aliquam labore, at, assumenda
              debitis dolore culpa. Hic, vero.
            </p>
            <a href="https://lafih.netlify.app/">Live</a>
            <a href="https://github.com/ArshM-15/lafih">Code</a>
          </div>

          <div className="projects-item">
            <img src={streamerloot} alt="image of the website" />
            <h3>Streamerloot</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              eveniet accusamus perferendis numquam, minima est. Reiciendis id
              facere nam! Mollitia corrupti autem quod quos excepturi blanditiis
              distinctio, nobis veritatis inventore!
            </p>
            <a href="https://streamerloot.netlify.app/">Live</a>
            <a href="https://github.com/ArshM-15/streamerloot">Code</a>
          </div>

          <div className="projects-item">
            <img src={countryrolodex} alt="image of the website" />
            <h3>Country Rolodex</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium distinctio rerum id inventore voluptatibus tempore
              illum, ratione ut, et qui rem! Ab possimus quasi eos, quisquam
              quaerat esse aliquid nulla.
            </p>
            <a href="https://country-rolodex.netlify.app/">Live</a>
            <a href="https://github.com/ArshM-15/Country-Rolodex">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
