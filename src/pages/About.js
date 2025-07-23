import Main from "../Main";
import profilePic from "../pictures/profilePic.png";
import "../About.css";
import "../index.css";

const About = () => {
  return (
    <Main className="about-main">
      <section className="about-section">
        <div className="about-text">
          <h1>O mnie</h1>
          <p>Krótko o mnie jestem zajebisty</p>
        </div>

        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </section>
      <section className="projects-section">
        <h1>Moje projekty</h1>
        <ul>
          <li>E commarce</li>
          <li>Wypoyczania</li>
          <li>Renamo</li>
          <li>To Do</li>
        </ul>
      </section>
    </Main>
  );
};

export default About;
