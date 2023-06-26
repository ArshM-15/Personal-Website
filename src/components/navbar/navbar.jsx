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
        <a href="https://www.canva.com/design/DAFkK81NxfE/Wd3m9oKWJqdufqjopoY1sA/view?utm_content=DAFkK81NxfE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
