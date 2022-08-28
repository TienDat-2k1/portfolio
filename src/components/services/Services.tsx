import './Services.scss';
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI/UX START */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* UI/UI END */}
        {/* WEB DEVELOPMENT START */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT END */}
        {/* CONTENT CREATION START */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION END */}
      </div>
    </section>
  );
};
export default Services;
