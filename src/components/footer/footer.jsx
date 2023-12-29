import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons-container">
        <a href="https://github.com/ArshM-15">
          <i class="fa-brands fa-github" id="icons"></i>
        </a>
        <a href="https://twitter.com/ArshMundi2">
          <i class="fa-brands fa-twitter" id="icons"></i>
        </a>
        <a href="https://www.canva.com/design/DAFfGWvoXrM/view">
          <i class="fa-solid fa-file" id="page"></i>
        </a>
      </div>
      <h3>Made with React & SCSS</h3>
    </div>
  );
};

export default Footer;
