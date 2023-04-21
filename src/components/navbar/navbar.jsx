import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name-label">Arshvir Mundi.</div>
      <div className="nav-items">
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <a>Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
