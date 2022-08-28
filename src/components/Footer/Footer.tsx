import './Footer.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100058054046996">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/tn.tiendat/">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
