import "./home.scss";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>
          Hi, I'm Arsh
          <div className="hand-rotate">👋</div>
        </h1>
      </header>

      <h1>Creating, Developing, and Always Learning</h1>
      <h2>Front End Developer</h2>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>
        Let's Talk
      </Link>
    </div>
  );
};

export default Home;
