import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>About</h1>
        <h2>Get To Know More About Me</h2>
      </div>
      <div className="content">
        <div className="description">
          <h3>Hello!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            laudantium beatae dolorem numquam omnis qui neque et illum alias,
            nulla deserunt temporibus delectus mollitia nostrum ad hic debitis,
            recusandae officia.
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-items">
            <div>HTML</div>
            <div>CSS</div>
            <div>JAVASCRIPT</div>
            <div>REACT</div>
            <div>SASS</div>
            <div>GIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
