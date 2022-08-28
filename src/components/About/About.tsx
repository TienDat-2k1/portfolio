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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            cumque, adipisci, ipsa iure tempora minus distinctio aliquid
            nesciunt numquam dolores itaque dicta fugiat soluta. Hic beatae
            corporis inventore dolores aliquid?
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
