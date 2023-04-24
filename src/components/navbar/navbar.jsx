import "./navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name-label">Arshvir Mundi.</div>
      <div className="nav-items">
        <Link to="about" spy={true} smooth={true} offset={-100} duration={700}>
          About
        </Link>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={700}>
          Projects
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>
          Contact
        </Link>
        <a>Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
