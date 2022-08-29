import './About.scss';
import ME from '../../assets/meabout.jpg';
import { FaAward } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Leaning</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>
            I am a hardworking and ambitious individual with a great passion for
            the infomation technology. I am currently in my last year at
            University of Transport Ho Chi Minh City. I have strong technical
            skills as well as excellent interpersonal skills, enabling me to
            interact with a wide range of clients. I am eager to be challenged
            in order to grow and further improve my IT skills. My greatest
            passion is in life is using my technical know-how to benefit other
            people and organisations.
          </p>

          <a href="#contact" className="btn btn--primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
