import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tiendat2k1/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/TienDat-2k1" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/tn.tiendat/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};
export default HeaderSocials;
