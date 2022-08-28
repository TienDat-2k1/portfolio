import './Portfolio.scss';
import IMG1 from '../../assets/movie-project.png';
import IMG2 from '../../assets/recipeProject.png';
import IMG3 from '../../assets/portfolio-project.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Project Completed</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a movie project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TienDat-2k1/the-movie-ui"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://the-movie-ui.netlify.app"
              className="btn btn--primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a recipe-search project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TienDat-2k1/forkify-app"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://forkify-app-tntiendat.netlify.app/"
              className="btn btn--primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio project</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              GitHub
            </a>
            <a href="#" className="btn btn--primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
