import "./about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>About</h1>
        <h2>Get to know more about me</h2>
      </div>
      <div className="content">
        <div className="description">
          <h3>Hello!</h3>
          <p>
            I am a 17-year-old Web Developer who has passion for software
            engineering and creating user-friendly websites. I possess a decent
            understanding of HTML, CSS, JavaScript, and React and have
            experience in building responsive website. I am highly motivated,
            detail-oriented, and always eager to learn and improve my skills.
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-items">
            <div>HTML</div>
            <div>CSS</div>
            <div>JAVASCRIPT</div>
            <div>JAVA</div>
            <div>REACT</div>
            <div>SCSS</div>
            <div>GITHUB</div>
            <div>FIREBASE</div>
            <div>FIGMA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
